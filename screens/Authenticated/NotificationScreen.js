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
                        {notif?.applicationStatus === 1 &&
                        notif?.disabled == false
                          ? /* 1 ) */ `Your application request has been sent - Application: ${notif?.applicationStatus}`
                          : notif?.applicationStatus === 2 &&
                            notif?.disabled == false
                          ? /* 2 ) */ `Your application request has been accepted - Application: ${notif?.applicationStatus}`
                          : notif?.applicationStatus === 2 &&
                            notif?.disabled == true
                          ? /* 2 ) */ `Your application request has been accepted - Application: ${notif?.applicationStatus}`
                          : notif?.appointmentStatus === 1 && notif?.phase == 0
                          ? /* 3 ) */ `Invitation for Initial Interview - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === 2 && notif?.phase === 1
                          ? /* 3.1 ) */ `You've accepted the inital appointment - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === 1 && notif?.phase == 2
                          ? /* 4 ) */ `Invitation for Final Interview - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === 2 && notif?.phase === 2
                          ? /* 4.1 ) */ `You've accepted the final appointment - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === 1 && notif?.phase == 3
                          ? /* 5 ) */ `Invitation for Collaborators interview - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === 2 && notif?.phase == 3
                          ? /* 5.1 ) */ `You've accepted the team introduction appointment - Appointment: ${notif?.appointmentStatus}  Phase: ${notif?.phase}`
                          : notif?.appointmentStatus === -1 &&
                            notif?.phase === 0
                          ? /* 0.1 ) */ "Invitation for Initial Interview - Declined"
                          : notif?.appointmentStatus === -1 &&
                            notif?.phase === 1
                          ? /* 0.2 ) */ "Invitation for Final Interview - Declined"
                          : notif?.appointmentStatus === -1 &&
                            notif?.phase === 2
                          ? /* 0.3 ) */ "Invitation for Collaborators interview - Declined"
                          : `Appointment status: ` +
                            notif?.appointmentStatus +
                            `\nphase: ` +
                            notif?.phase +
                            `\nApplicant status: ` +
                            notif?.applicationStatus}
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
