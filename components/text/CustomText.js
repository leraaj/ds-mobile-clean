import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT, SIZES, COLORS } from "../../constant/theme";

const CustomText = ({ children, font, size, isHeader, subHeader, isLight }) => {
  const fontFamily = () => {
    if (isHeader) return FONT.agdasimaBold;
    switch (font) {
      case "agdasima":
        return FONT.agdasima;
      case "agdasimaBold":
        return FONT.agdasimaBold;
      case "poppins":
        return FONT.poppins;
      case "poppinsMedium":
        return FONT.poppinsMedium;
      case "montserrat":
        return FONT.montserrat;
      default:
        return FONT.poppins;
    }
  };

  const fontSize = () => {
    if (isHeader) return SIZES.xLarge;
    switch (size) {
      case "xs":
        return SIZES.xSmall;
      case "sm":
        return SIZES.small;
      case "md":
        return SIZES.medium;
      case "lg":
        return SIZES.large;
      case "xl":
        return SIZES.xLarge;
      default:
        return SIZES.medium;
    }
  };

  return (
    <View style={{ paddingBottom: isHeader ? 30 : 0 }}>
      {isHeader && (
        <View
          style={{
            borderBottomColor: isLight ? COLORS.lightWhite : "black",
            borderBottomWidth: 5,
            width: 30,
            padding: 0,
            margin: 0,
          }}
        />
      )}
      <Text
        style={{
          fontFamily: fontFamily(),
          fontSize: fontSize(),
          textTransform: isHeader ? "uppercase" : "none",
          color: isLight ? COLORS.lightWhite : "black",
          marginTop: -4,
        }}>
        {children}
      </Text>
      {isHeader && subHeader && (
        <Text
          style={{
            fontFamily: FONT.agdasima,
            fontSize: 17,
            textTransform: "capitalize",
            color: isLight ? COLORS.lightWhite : "black",
          }}>
          ({subHeader})
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {},
});

export default CustomText;
