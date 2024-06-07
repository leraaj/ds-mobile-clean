import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

import {
  icons,
  image,
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
} from "../../constant/Index";
import CustomInput from "../Inputs/CustomInput";
const CustomButton = ({
  label,
  variant,
  onPress,
  isLoading,
  width,
  isChooseFile,
  value,
  placeholder,
  onChangeText,
  title,
  disabled,
  isLight,
}) => {
  const buttonStyle = (variant) => {
    switch (variant) {
      case "landing":
        return styles.landingButton;
      case "learn":
        return styles.learnMoreButton;
      case "internal":
        return styles.internalButton;
      case "view":
        return styles.viewNotificationButton;
      case "yes":
        return styles.yesButton;
      case "no":
        return styles.noButton;
      case "filter":
        return styles.filterButton;
      case "multiple":
        return styles.chooseMultiple;
      default:
        return styles.internalButton;
    }
  };

  const { button, label: labelStyle } = buttonStyle(variant);

  return isChooseFile ? (
    <View style={styles.choosefileContainer}>
      <View style={{ flex: 1 }}>
        <CustomInput
          isDownload
          title={title}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          disabled={disabled}
          isLight={isLight}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.chooseFileButton.button,
          { backgroundColor: isLight ? COLORS.lightWhite : COLORS.black },
        ]}
        disabled={disabled}
      >
        <Text
          style={[
            styles.chooseFileButton.label,
            { color: isLight ? COLORS.black : COLORS.lightWhite },
          ]}
        >
          Download
        </Text>
        <Image
          source={icons.download}
          resizeMode="contain"
          style={[
            styles.logoStyle,
            {
              tintColor: isLight ? "black" : "white",
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[button, { width: width || "auto" }]}
      onPress={onPress}
      disabled={isLoading}
    >
      <Text style={[labelStyle]}>
        {isLoading ? <ActivityIndicator size="small" color="#fff" /> : label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  landingButton: {
    button: {
      backgroundColor: COLORS.secondary,
      height: 50,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    label: { color: COLORS.white, textTransform: "uppercase" },
  },
  learnMoreButton: {
    button: {
      backgroundColor: "#E2E2E2",
      height: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: "#646363",
      fontSize: 12,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  internalButton: {
    button: {
      backgroundColor: COLORS.secondary,
      height: 40,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    label: {
      color: "#FFFFFF",
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  viewNotificationButton: {
    button: {
      backgroundColor: COLORS.secondary,
      height: 30,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: COLORS.white,
      fontSize: 12,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  yesButton: {
    button: {
      backgroundColor: COLORS.black,
      height: 40,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    },
    label: {
      color: COLORS.white,
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  noButton: {
    button: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      height: 40,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    },
    label: {
      color: COLORS.black,
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  filterButton: {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 29,
      paddingHorizontal: 15,
      borderRadius: 5,
      borderWidth: 1,
      marginHorizontal: 3,
    },
    label: {
      color: COLORS.black,
      fontSize: SIZES.small,
      textTransform: "capitalize",
      fontFamily: FONT.poppinsMedium,
    },
  },
  // CHOOSEFILEBUTTON
  choosefileContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  chooseFileButton: {
    button: {
      backgroundColor: COLORS.secondary,
      height: 40,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      flexDirection: "row",
      gap: 10,
    },
    label: {
      color: "#FFFFFF",
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  logoStyle: {
    height: 20,
    width: 20,
  },
  // CHOOSEMULTIPLEBUTTON
  chooseMultiple: {
    button: {
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "dashed",
      borderWidth: 2,
      padding: 10,
      borderRadius: 5,
    },
    label: {
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.poppins,
    },
  },
});

export default CustomButton;
