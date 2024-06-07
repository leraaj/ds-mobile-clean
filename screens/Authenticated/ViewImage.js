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
      <MainContainer isDark>
        <View
          style={{
            marginTop: 150,
          }}
        >
          <Image
            source={emptyImage}
            style={{
              width: "100%",
              height: 242,
            }}
          ></Image>
        </View>
      </MainContainer>
    </>
  );
};
export default ViewImage;
