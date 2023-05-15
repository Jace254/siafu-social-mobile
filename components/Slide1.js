import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Slide1 = ({ style }) => {
  return (
    <View style={[styles.slide1, style]}>
      <View style={styles.illustrationPlaceholder}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.slideImageIcon, styles.containerPosition]}
          contentFit="cover"
          source={require("../assets/slide-image.png")}
        />
      </View>
      <View style={styles.primaryText}>
        <Text style={styles.primaryTitle}>Realize your own goals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    top: 82,
    position: "absolute",
  },
  container: {
    right: 65,
    bottom: 40,
    left: 65,
    borderRadius: Border.br_120xl,
    backgroundColor: Color.whitesmoke_100,
  },
  slideImageIcon: {
    left: 28,
    width: 287,
    height: 337,
  },
  illustrationPlaceholder: {
    height: 459,
    width: 372,
  },
  primaryTitle: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.lightsteelblue,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    width: 343,
    justifyContent: "center",
  },
  primaryText: {
    height: 96,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_6xl,
    alignItems: "center",
    justifyContent: "center",
    width: 372,
  },
  slide1: {
    alignSelf: "stretch",
    width: 372,
  },
});

export default Slide1;
