import React, { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import useFetch from "../../hooks/useFetch";
import CustomButton from "../../components/button/CustomButton";

const HomeScreen = ({ navigation }) => {
  const fs = global.customFonts;

  const { data: jobs } = useFetch(
    `https://darkshots-server.onrender.com/api/jobs`
  );
  const { data: categories } = useFetch(
    `https://darkshots-server.onrender.com/api/categories`
  );

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

  useEffect(() => {
    fetchJobs();
  }, [jobs, categories]);

  return (
    <>
      <MainContainer>
        <SectionContainer
          header={"jobs offered"}
          subHeader={"home based, hybrid"}
        ></SectionContainer>

        <ScrollView horizontal={true}>
          <CustomButton variant={"view"} label={"All"}></CustomButton>
          {categories.map((category, index) => {
            return (
              <View
                style={{
                  marginEnd: 5,
                  paddingBottom: 10,
                }}
              >
                <CustomButton variant={"view"} label={category?.title} />
              </View>
            );
          })}
        </ScrollView>

        <View style={{ flex: 1 }}>
          {categories.length > 0 ? (
            categories.map((category) => (
              <View key={category._id}>
                <View style={{ paddingVertical: 20 }}>
                  <CustomText
                    size={"lg"}
                    font={"poppinsMedium"}
                    transform={"uppercase"}
                  >
                    {category.title}
                  </CustomText>
                </View>

                {displayJobsByCategory[category._id] &&
                displayJobsByCategory[category._id].length > 0 ? (
                  displayJobsByCategory[category._id].map((job, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <View style={{ flex: 1, textTransform: "capitalize" }}>
                        <CustomText>{job.title}</CustomText>
                      </View>

                      <CustomButton
                        variant={"learn"}
                        label={"learn more"}
                        width={100}
                        onPress={() => navigation.navigate("ViewJob", { job })}
                      />
                    </View>
                  ))
                ) : (
                  <Text>No jobs available in this category</Text>
                )}
              </View>
            ))
          ) : (
            <Text>No categories available</Text>
          )}
        </View>
      </MainContainer>
    </>
  );
};

export default HomeScreen;
