import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import Appbar from "react-native-paper/src/components/Appbar";
import SectionContainer from "../../components/container/SectionContainer";
import useFetch from "../../hooks/useFetch";
import { ActivityIndicator, Avatar } from "react-native-paper";
import darkshotsLogo from "../../assets/images/dslogo-collapsed-light.png";
import icons from "../../constant/icons";
import image from "../../constant/image";
import useDateTimeFormatter from "../../hooks/useDateTimeFormatter";

import { REACT_APP_API_URL } from "@env";
import { useFocusEffect } from "@react-navigation/core";
const NotificationScreen = ({ navigation }) => {
  const { state, auth, loadNotifications, notificationLoading, notifications } =
    useContext(AuthContext);
  const { user } = state;
  useFocusEffect(
    React.useCallback(() => {
      loadNotifications();
    }, [])
  );
  return (
    <>
      <MainContainer
        refresh={loadNotifications}
        isLoading={notificationLoading}>
        <SectionContainer header={`Notifications`}></SectionContainer>
        {notificationLoading ? (
          <ActivityIndicator size="large" color="#e0e0e0" />
        ) : notifications.length > 0 ? (
          notifications.map((notif, index) => {
            const status =
              notif.applicationStatus || notif.appointmentStatus || "";
            const { date, time, formattedTime } = useDateTimeFormatter(
              notif.createdAt
            );

            // Display the notification
            return (
              <View key={index} style={styles.notificationCard}>
                <View style={styles.logoContainer}>
                  <Image
                    source={darkshotsLogo}
                    style={{
                      height: 30,
                      width: 30,
                      objectFit: "contain",
                      padding: 0,
                    }}
                  />
                </View>
                <View style={styles.notificationContent}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}>
                    <CustomText>{notif?.user?.fullName}</CustomText>
                    <CustomText size={"sm"}>position</CustomText>
                    <View style={styles.messageContainer}>
                      <CustomText>
                        {notif?.applicationStatus === 1 && notif?.phase === 1
                          ? /* 1 ) */ `Your application request has been sent\n${notif?.applicationStatus} - ${notif?.phase} - ${notif?.complete}`
                          : notif?.applicationStatus === 2 &&
                            notif?.phase === 1 &&
                            (notif?.complete === 0 || notif?.complete === 1)
                          ? /* 2 ) */ `Your application request has been accepted`
                          : notif?.phase === 1 &&
                            notif?.appointmentStatus === 1 &&
                            notif?.complete === 0
                          ? /* 3 ) */ `Invitation for Initial Interview`
                          : notif?.appointmentStatus === 2 &&
                            notif?.phase === 1 &&
                            notif?.complete === 0
                          ? /* 3.1 ) */ `You've accepted the initial appointment`
                          : // Final Interview
                          notif?.phase === 2 &&
                            notif?.appointmentStatus === 1 &&
                            notif?.complete === 0
                          ? /* 4 ) */ `Invitation for Final Interview`
                          : notif?.appointmentStatus === 2 &&
                            notif?.phase === 2 &&
                            notif?.complete === 0
                          ? /* 4.1 ) */ `You've accepted the Final appointment`
                          : // Client Interview
                          notif?.phase === 3 &&
                            notif?.appointmentStatus === 1 &&
                            notif?.complete === 0
                          ? /* 4 ) */ `Invitation for Client Interview`
                          : notif?.appointmentStatus === 2 &&
                            notif?.phase === 3 &&
                            notif?.complete === 0
                          ? /* 4.1 ) */ `You've accepted the Client appointment`
                          : notif?.appointmentStatus === 2 &&
                            notif?.phase === 3 &&
                            notif?.complete === 1
                          ? /* 4.1 ) */ `Congratulations you're hired`
                          : ""}
                      </CustomText>
                    </View>
                  </View>
                  <View style={styles.footer}>
                    <View style={{ flex: 1 }}>
                      <CustomText size={"sm"}>{formattedTime}</CustomText>
                    </View>
                    <CustomButton
                      variant="view"
                      label="view"
                      onPress={() =>
                        navigation.navigate("ViewNotification", { notif })
                      }
                    />
                  </View>
                </View>
              </View>
            );
          })
        ) : notifications.length <= 0 ? (
          <CustomText>No applications available at this moment</CustomText>
        ) : null}
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: "#A5A5A5",
  },
  logoContainer: {
    marginEnd: 10,
    height: 50,
    width: 50,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  notificationContent: {
    flex: 1,
  },
  messageContainer: {
    paddingVertical: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default NotificationScreen;
