import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
export default Home;
