import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const Wallet = () => {
  return (
    <View style={styles.wallet}>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconhomeLayout: {
    width: 20,
    height: 20,
  },
  searchTypo: {
    marginTop: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
  },
  wallet: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    flex: 1,
    width: "100%",
  },
});

export default Wallet;
