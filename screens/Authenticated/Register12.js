import { View } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";

const Register12 = ({}) => {
  return (
    <MainContainer isDark>
      <SectionContainer isLight header={"upload your resume"}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <CustomText isLight>or</CustomText>
        </View>

        <CustomInput
          isLight
          title={"Shareable Link"}
          onChangeText={""}
        ></CustomInput>

        <CustomButton variant={"landing"} label={"NEXT"}></CustomButton>
      </SectionContainer>
    </MainContainer>
  );
};

export default Register12;
