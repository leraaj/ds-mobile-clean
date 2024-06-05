import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import useFetch from "../../hooks/useFetch";
import CustomButton from "../../components/button/CustomButton";
import CustomButton from "../../components/button/CustomButton";
import { useAuthContext } from "../../hooks/useAuthContext";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <MainContainer isDark>
        <SectionContainer
          isLight
          header={"jobs offered"}
          subHeader={"home based, hybrid"}
        ></SectionContainer>
        <View style={{ flex: 1 }}>
          {categories.length > 0 ? (
            categories.map((category) => (
              <View key={category._id}>
                <CustomText size={"lg"}>{category.title}</CustomText>
                {displayJobsByCategory[category._id] &&
                displayJobsByCategory[category._id].length > 0 ? (
                  displayJobsByCategory[category._id].map((job) => (
                    <View key={job._id}>
                      <Text>{job.title}</Text>

                      <CustomButton
                        variant={"learn"}
                        label={"learn more"}
                        width={100}
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
