import React, { useState, useContext } from "react";
import { View, Text, Button, Image, StyleSheet, Platform } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import emptyImage from "../../assets/images/emptyImage.png";
import download from "../../assets/icons/download.png";
import CustomButton from "../../components/button/CustomButton";
import Appbar from "react-native-paper/src/components/Appbar";
import CustomInput from "../../components/Inputs/CustomInput";

const ProfileScreen = ({ navigation }) => {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

  const { state, auth } = useContext(AuthContext);
  const { user } = state;
  const handleLogout = () => {
    auth.logout(); // Call logout method from AuthContext
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content />
        <Appbar.Action
          icon={MORE_ICON}
          onPress={() => navigation.navigate("EditProfile")}
        />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"profile"}>
          <Image
            source={emptyImage}
            style={{
              borderRadius: 50,
              height: 80,
              width: 80,
              marginBottom: 20,
            }}
          ></Image>
          <View
            style={{
              display: "flex",
              rowGap: 20,
              paddingBottom: 30,
            }}
          >
            <CustomInput title={"Full Name"} value={user?.fullName} disabled />
            <CustomInput title={"Email"} value={user?.email} disabled />
            <CustomInput
              title={"Contact Number"}
              value={user?.contact}
              disabled
            />
          </View>
        </SectionContainer>
        <SectionContainer header={"skills"}>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 8,
              paddingVertical: 30,
            }}
          >
            <CustomButton
              variant={"learn"}
              label={"Test"}
              isLight
            ></CustomButton>
          </View>
        </SectionContainer>

        <SectionContainer header={"files"}>
          <View style={{ paddingVertical: 30 }}>
            <CustomButton title="Resume" isChooseFile disabled />
          </View>
        </SectionContainer>

        <View style={styles.uploadContainer}>
          <Text style={[styles.uploadText]}>{"7 Files"}</Text>
        </View>
      </MainContainer>
    </>
  );
};

export const styles = StyleSheet.create({
  uploadContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#18191A",
    height: 100,
    borderStyle: "dashed",
    columnGap: 8,
    justifyContent: "center",
    marginBottom: 50,
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "#18191A",
    fontSize: 15,
    alignSelf: "center",
  },
});

export default ProfileScreen;
