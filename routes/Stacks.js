import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, SIZES } from "../constant/Index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuthContext } from "../hooks/useAuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/Authenticated/HomeScreen";
import NotificationScreen from "../screens/Authenticated/NotificationScreen";
import ProfileScreen from "../screens/Authenticated/ProfileScreen";
import LoadingScreen from "./LoadingScreen";
import ViewJobScreen from "../screens/Authenticated/ViewJobScreen";
import BlankScreen from "../screens/BlankScreen";
import ViewJobSearch from "../screens/Authenticated/ViewJobSearch";
import EditProfile from "../screens/Authenticated/EditProfile";
import ViewPortfolio from "../screens/Authenticated/ViewPortfolio";
import ViewImage from "../screens/Authenticated/ViewImage";
import ViewNotification from "../screens/Authenticated/ViewNotification";
import RegisterScreen from "../screens/Authenticated/RegisterScreen";
import Register11 from "../screens/Authenticated/Register11";
import Register12 from "../screens/Authenticated/Register12";
import Register13 from "../screens/Authenticated/Register13";
import Register131 from "../screens/Authenticated/Register131";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stacks = () => {
  const { state, isLoading } = useAuthContext();
  const { user } = state;
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    Agdasima: require("../assets/fonts/Agdasima/Agdasima-Regular.ttf"),
    AgdasimaBold: require("../assets/fonts/Agdasima/Agdasima-Bold.ttf"),
    Montserrat: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      initialRouteName={
        //user
        true ? "Authenticated" : "ViewJob"
      }
      screenOptions={{ headerShown: false }}
    >
      {
        //user
        true ? (
          isLoading ? (
            <Stack.Screen name="Loading" component={LoadingScreen} />
          ) : (
            <>
              <Stack.Screen
                name="Authenticated"
                component={HasBottomTabNavigation}
              />
              <Stack.Screen name="ViewJob" component={ViewJobScreen} />
              <Stack.Screen name="JobSearch" component={ViewJobSearch} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="ViewPortfolio" component={ViewPortfolio} />
              <Stack.Screen name="ViewImage" component={ViewImage} />
              <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
              />
              <Stack.Screen
                name="ViewNotification"
                component={ViewNotification}
              />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Register11" component={Register11} />
              <Stack.Screen name="Register12" component={Register12} />
              <Stack.Screen name="Register13" component={Register13} />
              <Stack.Screen name="Register131" component={Register131} />
            </>
          )
        ) : (
          <>
            <Stack.Screen name="Blank" component={BlankScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )
      }
    </Stack.Navigator>
  );
};
const HasBottomTabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: COLORS.secondary,
        position: "absolute",
        ...Platform.select({
          ios: { height: 80, padding: 10 },
          android: { height: 55, padding: 10 },
        }),
      },
      tabBarIcon: ({ size, color }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Notification") {
          iconName = "bell";
        } else if (route.name === "Profile") {
          iconName = "account";
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
      }}
    />
  </Tab.Navigator>
);
export default Stacks;
