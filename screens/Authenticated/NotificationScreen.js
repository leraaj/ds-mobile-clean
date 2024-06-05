import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";

const NotificationScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <CustomText>Notification Screen</CustomText>
    </MainContainer>
  );
};

export default NotificationScreen;
