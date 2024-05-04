import React from "react";
import { View, Text, Image, Button } from "react-native";

import GlobalStyles from "../GlobalStyle";

const Contact = (props) => {
  const title = "Contact Component";
  const onGotoSearch = () => {
    props.navigation.navigate("Search");
  };
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textTitle}>Hello from {title}</Text>
      <Text style={GlobalStyles.textTitle}>
        Contact Type : {props.type ? props.type : "Default"}
      </Text>

      <Image
        style={GlobalStyles.imageStyle}
        source={require("../assets/images/image.jpeg")}
      ></Image>

      <Button style={{}} onPress={() => onGotoSearch()} title="Search"></Button>
    </View>
  );
};

export default Contact;