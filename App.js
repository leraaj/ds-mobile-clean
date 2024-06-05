import React, { useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "./context/AuthContext";
import Stacks from "./routes/Stacks";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <AuthProvider navigation={navigationRef}>
          <Stacks />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
