import React from "react";
import { Text, View } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import { Appbar } from "react-native-paper";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import { useAuthContext } from "../../hooks/useAuthContext";
import { REACT_APP_API_URL } from "@env";
import useDateTimeFormatter from "../../hooks/useDateTimeFormatter";
const ViewNotification = ({ navigation, route }) => {
  const { state, isLoading, error } = useAuthContext();
  const { user } = state;
  const { notif: data } = route.params;
  const status = data?.applicationStatus || data?.appointmentStatus;
  const job = data?.job;
  const app = data;
  const applicationStatus = data?.applicationStatus;
  const appointmentStatus = data?.appointmentStatus;
  const phase = data?.phase;

  const handleInterviewUpdate = async (data) => {
    console.warn(`ID: ${user?._id}\nJOB ID: ${job?._id} PHASE: ${data?.phase}`);
    try {
      const response = await fetch(
        `${REACT_APP_API_URL}/api/appointment/${app?._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          sameSite: "None",
          body: JSON.stringify(data),
        }
      );
      const fnResponse = await response.json();
      if (response.ok) {
        console.log(fnResponse);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { date, time, formattedTime } = useDateTimeFormatter(data.createdAt);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"notifications"}>
          <CustomText>
            {JSON.stringify}
            {/* Applicant sending application  */}
            {data.applicationStatus === 1 &&
              data.disabled === false &&
              `Hi, ${data.user.fullName}!\n\n     Thank you for taking the time in sending your application to Darkshots!\n\nI would like to inform you that you have been shortlisted for the role of ${data.job.title}`}
            {data.applicationStatus === 2 &&
              data.disabled === true &&
              `Hello, ${data.user.fullName}!\n\n  Thank you for submitting your application to Darkshots.\n\n   I’m pleased to inform you that your application has been accepted. Please wait while we schedule an appointment for you.`}
            {/* ========================================= */}
            {/* Invitation for initial interview  */}
            {data.appointmentStatus === 1 &&
              data.phase == 0 &&
              `Hi ${data.user.fullName},\n\nGood day!\n\n   This email is to remind you about your scheduled initial interview regarding the position of ${data.job.title}.\n\nDate & time: ${date} / ${formattedTime}\nMeeting link: ${data.meetingLink}`}
            {/* Reminder for initial interview  */}
            {data.appointmentStatus === 2 &&
              data.phase == 1 &&
              `Hi ${data.user.fullName},\n\nGood day!\n\n   This email is to remind you about your scheduled initial interview regarding the position of ${data.job.title}.\n\nDate & time: ${date} / ${formattedTime}\nMeeting link: ${data.meetingLink}`}
            {/* ========================================= */}
            {/* Invitation for final interview  */}
            {data.appointmentStatus === 1 &&
              data.phase === 2 &&
              `Hi ${data.user.fullName},\n\nGood day!\n\n   This email is to remind you about your scheduled final interview regarding the position of ${data.job.title}.\n\nDate & time: ${date} / ${formattedTime}\nMeeting Link: ${data.meetingLink}`}
            {/* ========================================= */}
            {/* Invitation for team introduction  */}
            {data.appointmentStatus === 1 &&
              data.phase === 3 &&
              `Good Day!\n\nWe would like to invite you into the team briefing.\n\nDate & time: ${date} / ${formattedTime}\nMeeting Link: ${data.meetingLink}`}
            {data.appointmentStatus === 3 &&
              data.phase === 2 &&
              `Congratulations, proceed to Final Interview?\n\nDate & time: ${date} ${formattedTime}\nMeeting Link: ${data.meetingLink}`}
          </CustomText>
          {/* PENDING */}
          {/* notif?.appointmentStatus === 1 && notif?.phase == 0 */}
          {data.appointmentStatus === 1 && data?.phase == 0 && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                paddingVertical: 20,
              }}>
              <Text>Pending</Text>
              <CustomButton
                variant="no"
                label="No"
                onPress={() => {
                  const data = { phase: 1, appointmentStatus: -1 };
                  handleInterviewUpdate(data);
                }}
              />
              <CustomButton
                variant="yes"
                label="Yes, I'm available"
                onPress={() => {
                  const data = { phase: 1, appointmentStatus: 2 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
          {/* PENDING Initial Interview */}
          {/* notif?.appointmentStatus === 2 && notif?.phase === 1 */}
          {data.appointmentStatus === 1 && data.phase === 2 && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                paddingVertical: 20,
              }}>
              <Text>Final Interview</Text>
              <CustomButton
                variant="no"
                label="No"
                onPress={() => {
                  const data = { phase: 2, appointmentStatus: -1 };
                  handleInterviewUpdate(data);
                }}
              />
              <CustomButton
                variant="yes"
                label="Yes, I'm available"
                onPress={() => {
                  const data = { phase: 2, appointmentStatus: 2 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
          {data.appointmentStatus === 1 && data.phase === 3 && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                paddingVertical: 20,
              }}>
              <Text>Final Interview</Text>
              <CustomButton
                variant="no"
                label="No"
                onPress={() => {
                  const data = { phase: 3, appointmentStatus: -1 };
                  handleInterviewUpdate(data);
                }}
              />
              <CustomButton
                variant="yes"
                label="Yes, I'm available"
                onPress={() => {
                  const data = { phase: 3, appointmentStatus: 2 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
        </SectionContainer>
      </MainContainer>
    </>
  );
};
// {JSON.stringify(data, null, 2)}
export default ViewNotification;
