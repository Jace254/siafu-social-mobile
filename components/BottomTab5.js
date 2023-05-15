import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BottomTab5 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconpeople}
        contentFit="cover"
        source={require("../assets/iconpeople.png")}
      />
      <Text style={styles.search}>Dots</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconpeople: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    color: Color.lightslategray,
    textAlign: "center",
    marginTop: 14,
  },
  bottomTab: {
    width: 61,
    alignItems: "center",
  },
});

export default BottomTab5;
