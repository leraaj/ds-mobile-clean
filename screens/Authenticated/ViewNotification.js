import React from "react";
import { View } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import { Appbar } from "react-native-paper";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";

const ViewNotification = ({ navigation }) => {
  const labels = ["Zoom Id: ", "Zoom Pin: ", "Zoom Link: "];

  const CustomTextWithLabels = () => {
    return labels.map((label, index) => (
      <CustomText key={index} font={"poppinsMedium"}>
        {label}
      </CustomText>
    ));
  };
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.navigate("NotificationScreen")}
        />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"notifications"}>
          <View style={{ marginBottom: 20 }}>
            <CustomText font={"poppinsMedium"} size={"lg"}>
              {"Good Day!"}
            </CustomText>
          </View>

          <View
            style={{ flexDirection: "column", marginBottom: 10, rowGap: 5 }}
          >
            <CustomTextWithLabels />
            <View style={{ marginVertical: 30 }}>
              <CustomText font={"poppinsMedium"}>{"Note: "}</CustomText>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              justifyContent: "flex-end",
            }}
          >
            <CustomButton variant={"no"} label={"Not available"}></CustomButton>
            <CustomButton variant={"yes"} label={"Available"}></CustomButton>
          </View>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default ViewNotification;
