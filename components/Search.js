import React from "react";
import { View, Text, Button } from "react-native";
import GlobalStyles from "../GlobalStyle";
const Search = (props) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textTitle}>Search Page</Text>
      <Button
        style={{}}
        onPress={() => props.navigation.goBack()}
        title="Back"
      ></Button>
    </View>
  );
};

export default Search;
