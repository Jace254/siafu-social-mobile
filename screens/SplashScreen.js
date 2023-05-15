import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1]}
      colors={["#1a6eb4", "#000"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/splashscreen.png")}
      >
        <View style={styles.logoSection}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 365,
    height: 190,
  },
  logoSection: {
    width: 374,
    height: 190,
  },
  icon: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
  splashscreen: {
    height: 812,
    width: "100%",
  },
});

export default SplashScreen;
