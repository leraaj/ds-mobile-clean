import React, { useState, useContext } from "react";
import { Image, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import CustomButton from "../components/button/CustomButton";
import CustomInput from "../components/Inputs/CustomInput";
import MainContainer from "../components/container/MainContainer";
import CustomText from "../components/text/CustomText";
import { SIZES } from "../constant/theme";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const { auth, isLoading, error, loginSuccess } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await auth.login({ username, password });
    } catch (error) {
      console.error(error);
    } finally {
      if (loginSuccess) {
        // Clear username and password only if login is successful
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <MainContainer isCentered isDark>
      <Image
        source={require("../assets/images/dslogo-collapsed-light.png")}
        style={{ objectFit: "contain", height: 100 }}
      />
      <Image
        source={require("../assets/images/dsproductionlogo-light.png")}
        style={{ objectFit: "contain", height: 61, marginBottom: 26 }}
      />
      <CustomInput
        isLight
        title={"Username"}
        placeholder={"Enter your username"}
        onChangeText={handleUsername}
      />
      <CustomInput
        isLight
        title={"Password"}
        placeholder={"Enter your password"}
        isPassword
        onChangeText={handlePassword}
      />
      <View style={{ flexDirection: "column", gap: 15, width: "100%" }}>
        <CustomButton
          label={"sign in"}
          variant={"landing"}
          isLoading={isLoading}
          onPress={handleLogin}
        />
        <View style={{ alignItems: "flex-end" }}>
          <CustomText font={"montserrat"} size={SIZES.xSmall} isLight>
            Don’t have an account?{" "}
            <CustomText
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Sign up
            </CustomText>
          </CustomText>
        </View>
        {/* <CustomButton
          label={"Go Back"}
          variant={"landing"}
          onPress={() => navigation.navigate("Blank")}
        /> */}
      </View>
      <Text style={{ width: "100%" }}>{error}</Text>
    </MainContainer>
  );
};

export default LoginScreen;
