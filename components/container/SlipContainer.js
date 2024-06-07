import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constant/Index";
import CustomText from "../text/CustomText";

const SlipContainer = ({ children, title }) => {
  return (
    <>
      <View style={styles.slipContainerTitle}>
        <CustomText isLight size={"xl"} font={"montserrat"}>
          {title}
        </CustomText>
      </View>
      <View style={styles.slipContainer}>{children}</View>
    </>
  );
};
const styles = StyleSheet.create({
  slipContainerTitle: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
  slipContainer: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 70,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    zIndex: 2,
  },
});
export default SlipContainer;
