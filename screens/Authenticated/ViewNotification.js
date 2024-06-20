import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
  const InitialScreening =
    data?.phase === 1 && data?.appointmentStatus === 1 && data?.complete === 0;
  const FinalInterview =
    data?.phase === 2 && data?.appointmentStatus === 1 && data?.complete === 0;
  const ClientInterview =
    data?.phase === 3 && data?.appointmentStatus === 1 && data?.complete === 0;

  const InitialAccepted =
    data?.appointmentStatus === 2 && data?.phase === 1 && data?.complete === 0;
  const FinalAccepted =
    data?.appointmentStatus === 2 && data?.phase === 2 && data?.complete === 0;
  const ClientAccepted =
    data?.appointmentStatus === 2 && data?.phase === 3 && data?.complete === 0;

  const Hired =
    data?.appointmentStatus === 2 && data?.phase === 3 && data?.complete === 1;
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"notifications"}>
          <CustomText>
            {/* 1st Stage PENDING */}
            {data.phase === 1 &&
              data.applicationStatus === 1 &&
              `You've sent an application	applying for the role of ${data.job.title}`}
            {/* 2nd Stage IN-PROGRESS */}
            {data.phase === 1 &&
              data.applicationStatus === 2 &&
              `Your request has been accepted, please wait for an appointment `}
            {/* 3rd Stage DONE */}
            {data.phase === 1 &&
              data.applicationStatus === 2 &&
              data.complete === 1 &&
              `Invitation for Initial Interview`}
            {/* Appointments Invitation */}
            {(InitialScreening || FinalInterview || ClientInterview) &&
              `${
                InitialScreening
                  ? "Initial Screening:\n"
                  : FinalInterview
                  ? "Final Interview\n"
                  : ClientInterview
                  ? "Client Interview\n"
                  : ""
              }Meeting Link: ${data.meetingLink}\nMeeting Schedule: ${
                data.meetingTime
              }`}
            {(InitialAccepted || FinalAccepted || ClientAccepted) &&
              `${
                InitialAccepted
                  ? "Initial Screening Details:\n"
                  : FinalAccepted
                  ? "Final Interview Details\n"
                  : ClientAccepted
                  ? "Client Interview Details\n"
                  : ""
              }\nMeeting Link: ${
                data.meetingLink
              }\nMeeting Schedule: ${date}, ${formattedTime}`}

            {Hired &&
              `Congratulations ${data?.user?.fullName}, please wait while the admin sets you up in a collaborative space with your client and several applicants, \n\nCheck your dashboard on the web to collaborate with your client and applicants\n\n` +
                (
                  <TouchableOpacity>
                    <CustomText>https://darkshot-web.onrender.com</CustomText>
                  </TouchableOpacity>
                )}
          </CustomText>
          {/* PENDING */}
          {/* notif?.appointmentStatus === 1 && notif?.phase == 0 */}
          {InitialScreening && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                paddingVertical: 20,
              }}>
              <Text>Initial Screening</Text>
              <CustomButton
                variant="no"
                label="No"
                onPress={() => {
                  const data = { phase: 1, appointmentStatus: -1, complete: 1 };
                  handleInterviewUpdate(data);
                }}
              />
              <CustomButton
                variant="yes"
                label="Yes, I'm available"
                onPress={() => {
                  const data = { phase: 1, appointmentStatus: 2, complete: 0 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
          {FinalInterview && (
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
                  const data = { phase: 2, appointmentStatus: -1, complete: 0 };
                  handleInterviewUpdate(data);
                }}
              />
              <CustomButton
                variant="yes"
                label="Yes, I'm available"
                onPress={() => {
                  const data = { phase: 2, appointmentStatus: 2, complete: 0 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
          {ClientInterview && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                paddingVertical: 20,
              }}>
              <Text>Client Interview</Text>
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
                  const data = { phase: 3, appointmentStatus: 2, complete: 0 };
                  handleInterviewUpdate(data);
                }}
              />
            </View>
          )}
          <CustomText>
            {/* Debugg, erase if done */}
            {`\n\nDebug:\nApplicationStatus: ${data.applicationStatus}\nAppointmentStatus: ${data.appointmentStatus}\nPhase: ${data.phase}\nComplete: ${data.complete}`}
          </CustomText>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
// {JSON.stringify(data, null, 2)}
export default ViewNotification;
