import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Color, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={styles.resetpassword}>
      <StatusBar barStyle="default" />
      <View style={styles.loginPageBody}>
        <ForgotPasswordForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resetpasswordheader: {
    backgroundColor: "#fff",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  loginPageBody: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    height: 708,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    width: 375,
    alignItems: "center",
  },
  resetpassword: {
    flex: 1,
    height: 812,
    alignItems: "center",
    width: "100%",
  },
});

export default ResetPassword;
