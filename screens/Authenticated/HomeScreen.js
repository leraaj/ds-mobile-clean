import React, { useCallback, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import useFetch from "../../hooks/useFetch";
import CustomButton from "../../components/button/CustomButton";
import SlipContainer from "../../components/container/SlipContainer";
import { Appbar, Searchbar, ActivityIndicator } from "react-native-paper";
import { COLORS } from "../../constant/theme";
import { REACT_APP_API_URL } from "@env";
import { useFocusEffect } from "@react-navigation/core";
const HomeScreen = ({ navigation }) => {
  const {
    data: jobs,
    isLoading: isLoadingJobs,
    refresh: refreshJobs,
  } = useFetch(`${REACT_APP_API_URL}/api/jobs`);
  const {
    data: categories,
    isLoading: isLoadingCategories,
    refresh: refreshCategories,
  } = useFetch(`${REACT_APP_API_URL}/api/categories`);

  const [displayJobsByCategory, setDisplayJobsByCategory] = useState({});

  const fetchJobs = () => {
    if (jobs.length > 0 && categories.length > 0) {
      const jobsByCategory = categories.reduce((index, category) => {
        index[category._id] = jobs.filter(
          (job) => job.category._id === category._id
        );
        return index;
      }, {});
      setDisplayJobsByCategory(jobsByCategory);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchJobs();
    }, [jobs, categories])
  );

  const handleRefresh = () => {
    refreshJobs();
    refreshCategories();
  };

  return (
    <>
      <Appbar.Header
        style={{ backgroundColor: COLORS.primary }}></Appbar.Header>
      <MainContainer
        hasSlipContainer
        isDark
        refresh={handleRefresh}
        isLoading={isLoadingJobs || isLoadingCategories}>
        <SlipContainer title={"Let's find the perfect job for you"}>
          <Searchbar
            placeholder="Search"
            onFocus={() => navigation.navigate("JobSearch")}
            style={{
              backgroundColor: COLORS.white,
              zIndex: 1,
              elevation: 5, // For Android shadow
              shadowColor: "#000000", // For iOS shadow
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              marginTop: -65,
              marginBottom: 20,
            }}
          />
          <SectionContainer
            header={"jobs offered"}
            subHeader={"home based, hybrid"}>
            {/* <ScrollView horizontal={true} style={{ paddingBottom: 15 }}>
              <CustomButton variant={"filter"} label={"All"} />
              {categories.map((category, index) => (
                <CustomButton
                  key={index}
                  variant={"filter"}
                  label={category?.title}
                />
              ))}
            </ScrollView> */}
            {isLoadingJobs || isLoadingCategories ? (
              <ActivityIndicator size="large" color="#e0e0e0" />
            ) : (
              <View style={{ flexGrow: 1 }}>
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <View key={index}>
                      <View style={{ paddingVertical: 20 }}>
                        <CustomText
                          size={"lg"}
                          font={"poppinsMedium"}
                          transform={"uppercase"}>
                          {category.title}
                        </CustomText>
                      </View>

                      {displayJobsByCategory[category._id] &&
                      displayJobsByCategory[category._id].length > 0 ? (
                        displayJobsByCategory[category._id].map(
                          (job, index) => (
                            <View
                              key={index}
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 12,
                              }}>
                              <View
                                style={{
                                  flex: 1,
                                  textTransform: "capitalize",
                                }}>
                                <CustomText>{job.title}</CustomText>
                              </View>

                              <CustomButton
                                variant={"learn"}
                                label={"learn more"}
                                width={100}
                                onPress={() =>
                                  navigation.navigate("ViewJob", { job })
                                }
                              />
                            </View>
                          )
                        )
                      ) : (
                        <ActivityIndicator size="large" color="#e0e0e0" />
                      )}
                    </View>
                  ))
                ) : (
                  <Text>No categories available</Text>
                )}
              </View>
            )}
          </SectionContainer>
        </SlipContainer>
      </MainContainer>
    </>
  );
};

export default HomeScreen;
