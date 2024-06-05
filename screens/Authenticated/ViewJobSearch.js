import React from "react";
import { Text, View } from "react-native";
import { Appbar, Searchbar } from "react-native-paper";
import MainContainer from "../../components/container/MainContainer";

const ViewJobSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content
          title={
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{ backgroundColor: "transparent", marginEnd: 10 }}
            />
          }
        />
      </Appbar.Header>
      <MainContainer>
        <Text>Search for jobs</Text>
      </MainContainer>
    </>
  );
};

export default ViewJobSearch;
