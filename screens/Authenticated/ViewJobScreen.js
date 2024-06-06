import React, { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import { Appbar } from "react-native-paper";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";

const ViewJobScreen = ({ navigation, route }) => {
  const { job } = route.params;
  const title = job?.title;
  const why = job?.details?.why;
  const what = job?.details?.what;
  const pay = job?.details?.benefits?.pay;
  const schedule = job?.details?.benefits?.schedule;

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
      </Appbar.Header>
      <MainContainer>
        <CustomText size={"lg"}>{title}</CustomText>
        <CustomText>{`Why become a ${title}?`}</CustomText>
        <View style={{ marginVertical: 10 }}>
          <CustomText>{why}</CustomText>
        </View>
        <CustomText>{`What does the role require?`}</CustomText>
        <View style={{ marginVertical: 10 }}>
          <CustomText>{what}</CustomText>
        </View>
        <CustomText>{`Typical responsibilities include:`}</CustomText>
        <View style={{ marginVertical: 10 }}>
          {job?.details?.responsibilities.map((res) => {
            return <CustomText>• {res} </CustomText>;
          })}
        </View>
        <CustomText>{`Requirements and skills`}</CustomText>
        <View style={{ marginVertical: 10 }}>
          {job?.details?.requirements.map((res) => {
            return <CustomText>• {res} </CustomText>;
          })}
        </View>
        <CustomText>{`Benefits`}</CustomText>
        <CustomText>{pay}</CustomText>
        <CustomText>{schedule}</CustomText>

        <CustomText>{`Our Hiring Process:`}</CustomText>
        <CustomText>{`Initial Interview`}</CustomText>
        <CustomText>{`Final Interview`}</CustomText>

        <CustomButton variant={"internal"} label={"Apply Now"}>
          {"Apply Now"}
        </CustomButton>
      </MainContainer>
    </>
  );
};

export default ViewJobScreen;
