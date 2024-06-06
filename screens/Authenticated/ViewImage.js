import React from "react";
import { Image, View } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import { Appbar } from "react-native-paper";
import emptyImage from "../../assets/images/emptyImage.png";

const ViewImage = ({ navigation }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.navigate("ViewPortfolio")}
        />
      </Appbar.Header>
      <MainContainer>
        <View
          style={{
            marginTop: 150,
          }}
        >
          <Image
            source={emptyImage}
            style={{
              height: 242,
              width: "100%",
            }}
          ></Image>
        </View>
      </MainContainer>
    </>
  );
};
export default ViewImage;
