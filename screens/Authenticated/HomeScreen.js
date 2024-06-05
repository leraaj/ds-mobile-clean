import React, { useContext } from "react";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import CustomButton from "../../components/button/CustomButton";
import { useAuthContext } from "../../hooks/useAuthContext";

const HomeScreen = ({ navigation }) => {
  const { state, auth } = useAuthContext();
  const { user } = state;
  const handleLogout = () => {
    auth.logout(); // Call logout method from AuthContext
  };
  return (
    <>
      <MainContainer isDark>
        <SectionContainer
          isLight
          header={"jobs offered"}
          subHeader={"home based, hybrid"}>
          <CustomButton label={"Logout"} onPress={handleLogout}></CustomButton>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default HomeScreen;
