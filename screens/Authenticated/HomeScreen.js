import React, { useContext } from "react";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <MainContainer>
        <SectionContainer
          header={"jobs offered"}
          subHeader={"home based, hybrid"}></SectionContainer>
      </MainContainer>
    </>
  );
};

export default HomeScreen;
