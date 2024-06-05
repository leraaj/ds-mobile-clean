import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constant/Index";

const MainContainer = ({ children, isCentered, isDark }) => {
  return (
    <View
      style={{
        backgroundColor: isDark ? COLORS.primary : "transparent",
        flex: 1,
      }}>
      <ScrollView
        bounces={false}
        alwaysBounceVertical={false}
        automaticallyAdjustKeyboardInsets
        automaticallyAdjustContentInsets
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[isCentered && styles.scrollViewContent, ,]}>
        <SafeAreaView style={[styles.safeArea, ,]}>
          <View style={[styles.innerContainer, isCentered && styles.center]}>
            {children}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 25,
    width: "100%", // Ensure it takes full width
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default MainContainer;
