import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

function Vender() {
  return (
    // <View style={styles.container}>
    <View style={tw.style("flex-1 justify-center items-center")}>
      <Text>Vender</Text>
    </View>
  );
}

export default Vender;
