import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BottomTab2 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconwallet}
        contentFit="cover"
        source={require("../assets/iconwallet1.png")}
      />
      <Text style={styles.search}>Wallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconwallet: {
    width: 21,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue_100,
    textAlign: "center",
    marginTop: 14,
  },
  bottomTab: {
    width: 61,
    alignItems: "center",
  },
});

export default BottomTab2;
