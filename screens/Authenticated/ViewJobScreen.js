import React from "react";
import MainContainer from "../../components/container/MainContainer";
import { Appbar, useTheme } from "react-native-paper";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import { COLORS, icons } from "../../constant/Index";
import SlipContainer from "../../components/container/SlipContainer";
import { View } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Alert } from "react-native";

import { REACT_APP_API_URL } from "@env";
const ViewJobScreen = ({ navigation, route }) => {
  const { state, isLoading, error, loadNotifications } = useAuthContext();
  const { user } = state;
  const { job } = route.params;
  const title = job?.title;
  const why = job?.details?.why;
  const what = job?.details?.what;
  const pay = job?.details?.benefits?.pay;
  const schedule = job?.details?.benefits?.schedule;

  const handleCreateApplication = async () => {
    try {
      const data = {
        userId: user?._id,
        jobId: job?._id,
        applicationStatus: 1,
      };
      const response = await fetch(`${REACT_APP_API_URL}/api/application`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        sameSite: "None",
        body: JSON.stringify(data),
      });
      const fnResponse = await response.json();
      if (response.ok) {
        console.log(fnResponse);
        loadNotifications(user._id);
        navigation.navigate("Notification");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Appbar.Header style={{ backgroundColor: COLORS.primary, zIndex: 0 }}>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <MainContainer hasSlipContainer isDark>
        <SlipContainer title={title}>
          <View style={{ gap: 20, paddingBottom: 20 }}>
            <CustomText size={"lg"} font={"poppinsMedium"}>
              {`Why become a ${title}?`}
            </CustomText>
            <CustomText>{why}</CustomText>
          </View>

          <View style={{ gap: 20, paddingBottom: 20 }}>
            <CustomText
              size={"lg"}
              font={
                "poppinsMedium"
              }>{`What does the role require?`}</CustomText>
            <CustomText>{what}</CustomText>
          </View>

          <View style={{ gap: 20, paddingBottom: 20 }}>
            <CustomText
              size={"md"}
              font={
                "poppinsMedium"
              }>{`Typical responsibilities include:`}</CustomText>
            {job?.details?.responsibilities.map((res, index) => {
              return <CustomText key={index}>• {res} </CustomText>;
            })}
          </View>
          <View style={{ gap: 20, paddingBottom: 20 }}>
            <CustomText
              size={"lg"}
              font={"poppinsMedium"}>{`Requirements and skills`}</CustomText>
            {job?.details?.requirements.map((res, index) => {
              return <CustomText key={index}>• {res} </CustomText>;
            })}
          </View>
          <View style={{ gap: 20, paddingBottom: 20 }}>
            <CustomText
              size={"lg"}
              font={"poppinsMedium"}>{`Benefits:`}</CustomText>

            <View>
              <CustomText>{`Pay: ${pay}`}</CustomText>

              <CustomText>{`Schedule: ${schedule}`}</CustomText>
            </View>
          </View>
          <View style={{ gap: 5, paddingBottom: 20 }}>
            <CustomText
              size={"lg"}
              font={"poppinsMedium"}>{`Our Hiring Process:`}</CustomText>
            <View style={{ gap: 5, paddingBottom: 20 }}>
              <CustomText>{`Initial Interview`}</CustomText>
              <CustomText>{`Final Interview`}</CustomText>
            </View>
          </View>
          <CustomButton
            variant={"internal"}
            label={"Apply Now"}
            onPress={handleCreateApplication}>
            {"Apply Now"}
          </CustomButton>
        </SlipContainer>
      </MainContainer>
    </>
  );
};
export default ViewJobScreen;
