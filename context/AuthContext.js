import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import LoadingScreen from "../routes/LoadingScreen";

const AuthContext = createContext();

const authReducer = (prevState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...prevState, token: action.token, user: action.user };
    case "LOGOUT":
      return { ...prevState, token: null, user: null };
    default:
      return prevState;
  }
};

const AuthProvider = ({ children, navigation }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
    user: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const URL = `https://darkshots-server.onrender.com/api/user/current-user-mobile`;

  const refreshUser = async () => {
    setIsLoading(true);
    try {
      const userToken = await SecureStore.getItemAsync("token");
      if (!userToken) {
        throw new Error("Token not found");
      }

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        credentials: "include",
        sameSite: "None",
      });

      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        dispatch({ type: "LOGIN", token: userToken, user: data.user });
        // console.log("User Refreshed:", data.user);
      } else {
        // console.error("message: ", data.message);
        setError(data.message);
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      setError(error.message);
      // console.error("Error refreshing user:", error);
      dispatch({ type: "LOGOUT" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const auth = useMemo(
    () => ({
      login: async (data) => {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://darkshots-server.onrender.com/api/user/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(data),
              sameSite: "None",
            }
          );

          if (response.ok) {
            const { user, token } = await response.json();
            if (user?.position === 3) {
              await SecureStore.setItemAsync("token", token);
              dispatch({ type: "LOGIN", token, user });
              setError("");
              setLoginSuccess(true);
              setTimeout(() => {
                setIsLoading(false);
                navigation.navigate("Home");
              }, 3000);
            } else {
              setIsLoading(false);
              setError("Invalid username or password");
            }
          } else {
            setIsLoading(false);
            setError("Invalid username or password");
          }
        } catch (error) {
          setIsLoading(false);
          // console.error(error);
        }
      },
      logout: async () => {
        try {
          setIsLoading(true);
          await SecureStore.deleteItemAsync("token");
          setTimeout(() => {
            dispatch({ type: "LOGOUT" });
            setIsLoading(false);
            setLoginSuccess(false);
            navigation.navigate("Login");
          }, 3000);
        } catch (e) {
          console.error("Failed to delete the user token.", e);
        }
      },
      register: async () => {
        const userToken = "dummy-auth-token";
        await SecureStore.setItemAsync("token", userToken);
        dispatch({ type: "LOGIN", token: userToken, user: {} });
      },
    }),
    [navigation]
  );

  return (
    <AuthContext.Provider
      value={{ state, auth, isLoading, error, loginSuccess }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
