import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constant/theme";

const MainContainer = ({
  children,
  isCentered,
  isDark,
  hasSlipContainer,
  refresh,
  isLoading,
}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refresh && refresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, [refresh]);

  return (
    <ScrollView
      bounces={false}
      alwaysBounceVertical={false}
      automaticallyAdjustKeyboardInsets
      automaticallyAdjustContentInsets
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        isCentered && styles.scrollViewContent,
        {
          backgroundColor: isDark ? COLORS.primary : "transparent",
        },
      ]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.safeArea}>
        <View
          style={[
            !hasSlipContainer && styles.innerContainer,
            isCentered && styles.center,
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 70,
    width: "100%", // Ensure it takes full width
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
    zIndex: 1,
  },
});

export default MainContainer;
