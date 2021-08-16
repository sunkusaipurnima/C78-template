/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

const ISSLocationScreen = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <ImageBackground
        source={require("../assets/iss_bg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>ISS Location</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default ISSLocationScreen;
