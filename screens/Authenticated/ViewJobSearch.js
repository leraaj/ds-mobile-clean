import React, { useRef } from "react";
import { Text, View, ActivityIndicator, Platform } from "react-native";
import { Appbar, Searchbar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import MainContainer from "../../components/container/MainContainer";
import useFetch from "../../hooks/useFetch";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";

import { REACT_APP_API_URL } from "@env";
const ViewJobSearch = ({ navigation }) => {
  const inputRef = useRef();
  const focusTextInput = () => {
    inputRef.current && inputRef.current.focus();
  };
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data: jobs, loading: jobLoading } = useFetch(
    `${REACT_APP_API_URL}/api/jobs`
  );
  const filteredJobs = jobs?.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        focusTextInput();
      }, 100); // Adjust the delay if necessary
      return () => clearTimeout(timer);
    }, [])
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content
          title={
            <Searchbar
              ref={inputRef}
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{
                backgroundColor: "transparent",
                marginEnd: 10,
                ...Platform.select({
                  ios: {
                    width: "100%",
                  },
                }),
              }}
            />
          }
        />
      </Appbar.Header>
      <MainContainer>
        {jobLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <View style={{ paddingBottom: 10 }}>
              <CustomText size={"lg"} font={"poppins"}>
                Search Results for{" "}
                <Text style={{ fontFamily: "PoppinsMedium" }}>
                  {searchQuery || "..."}
                </Text>
              </CustomText>
            </View>
            {searchQuery.length > 0
              ? filteredJobs.map((job, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                        alignItems: "center",
                      }}>
                      <Text
                        style={{
                          flex: 1,
                          flexWrap: "nowrap",
                        }}>
                        {job.title}
                      </Text>
                      <CustomButton
                        label={"learn more"}
                        variant={"learn"}
                        onPress={() => navigation.navigate("ViewJob", { job })}
                      />
                    </View>
                  );
                })
              : null}
          </>
        )}
      </MainContainer>
    </>
  );
};

export default ViewJobSearch;
