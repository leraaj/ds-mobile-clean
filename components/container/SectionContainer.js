import React from "react";
import { View } from "react-native";
import CustomText from "../text/CustomText";

const SectionContainer = ({ children, header, subHeader, isLight }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <CustomText isLight={isLight} isHeader subHeader={subHeader}>
        {header}
      </CustomText>
      {children}
    </View>
  );
};

export default SectionContainer;
