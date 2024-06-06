import React from "react";
import { View, Image } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import { Appbar } from "react-native-paper";
import SectionContainer from "../../components/container/SectionContainer";
import emptyImage from "../../assets/images/emptyImage.png";

const ViewPortfolio = ({ navigation }) => {
  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 6; i++) {
      images.push(
        <Image
          key={i}
          source={emptyImage}
          style={{ width: 150, height: 100, marginBottom: 10, borderRadius: 5 }}
        />
      );
    }
    return images;
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Profile")} />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"portfolio"}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {renderImages()}
          </View>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default ViewPortfolio;
