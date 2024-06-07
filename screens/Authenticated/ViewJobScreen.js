import React from "react";
import MainContainer from "../../components/container/MainContainer";
import { Appbar, useTheme } from "react-native-paper";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import { COLORS, icons } from "../../constant/Index";
import SlipContainer from "../../components/container/SlipContainer";
import { View } from "react-native";

const ViewJobScreen = ({ navigation, route }) => {
  const { job } = route.params;
  const title = job?.title;
  const why = job?.details?.why;
  const what = job?.details?.what;
  const pay = job?.details?.benefits?.pay;
  const schedule = job?.details?.benefits?.schedule;

  return (
    <>
      <Appbar.Header style={{ backgroundColor: COLORS.primary, zIndex: 0 }}>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <MainContainer hasSlipContainer isDark>
        <SlipContainer title={title}>
          <CustomText style={{}}>
            <View style={{ gap: 20, marginBottom: 25 }}>
              <CustomText size={"lg"} font={"poppinsMedium"}>
                {`Why become a ${title}?`}
              </CustomText>

              <CustomText>{why}</CustomText>
            </View>

            <View style={{ gap: 20, marginBottom: 25 }}>
              <CustomText
                size={"lg"}
                font={"poppinsMedium"}
              >{`What does the role require?`}</CustomText>
              <CustomText>{what}</CustomText>
            </View>

            <View style={{ gap: 15, marginTop: 10 }}>
              <CustomText
                size={"md"}
                font={"poppinsMedium"}
              >{`Typical responsibilities include:`}</CustomText>
              {job?.details?.responsibilities.map((res, index) => {
                return <CustomText key={index}>• {res} </CustomText>;
              })}
            </View>
            <View style={{ gap: 15, marginTop: 25 }}>
              <CustomText
                size={"lg"}
                font={"poppinsMedium"}
              >{`Requirements and skills`}</CustomText>
              {job?.details?.requirements.map((res, index) => {
                return <CustomText key={index}>• {res} </CustomText>;
              })}
            </View>

            <View style={{ gap: 20, marginTop: 25 }}>
              <CustomText
                size={"lg"}
                font={"poppinsMedium"}
              >{`Benefits:`}</CustomText>

              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <CustomText>{`Pay: ${pay}`}</CustomText>

                <CustomText>{`Schedule: ${schedule}`}</CustomText>
              </View>
            </View>

            <View style={{ gap: 10, marginTop: 25, marginBottom: 60 }}>
              <CustomText
                size={"lg"}
                font={"poppinsMedium"}
              >{`Our Hiring Process:`}</CustomText>
              <CustomText>{`Initial Interview`}</CustomText>
              <CustomText>{`Final Interview`}</CustomText>
            </View>
          </CustomText>

          <CustomButton variant={"internal"} label={"Apply Now"}>
            {"Apply Now"}
          </CustomButton>
        </SlipContainer>
      </MainContainer>
    </>
  );
};
export default ViewJobScreen;
