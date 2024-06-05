import React, { useContext } from "react";
import { View, Text, Button, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import { Appbar, Searchbar } from "react-native-paper";
import { icons, image } from "../../constant/Index";
const ViewJobScreen = ({ navigation }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
      </Appbar.Header>
      <MainContainer>
        <Text>Show Job Selected</Text>
      </MainContainer>
    </>
  );
};

export default ViewJobScreen;
