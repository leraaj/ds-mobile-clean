import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import Appbar from "react-native-paper/src/components/Appbar";
import SectionContainer from "../../components/container/SectionContainer";

const NotificationScreen = ({ navigation }) => {
  const { state, auth } = useContext(AuthContext);
  const { user } = state;

  const handleLogout = () => {
    auth.logout(); // Call logout method from AuthContext
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"Notifications"}></SectionContainer>
        <CustomButton label={"Logout"} onPress={handleLogout} />
      </MainContainer>
    </>
  );
};

export default NotificationScreen;
