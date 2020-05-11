import React from "react";
import { Platform, Button } from "react-native";
// import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const customHeaderButton = (props) => {
  return (
    <Button title={props.title} onPress={props.onPress} />
    // <HeaderButton
    //   IconComponent={Ionicons}
    //   iconName="add"
    //   color={Platform.os === "android" ? "white" : Colors.primary}
    //   iconSize={23}
    // />
  );
};
export default customHeaderButton;
