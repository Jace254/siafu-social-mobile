import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import LoginForm from "../components/LoginForm";
import { Color, Padding } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <StatusBar barStyle="default" />
      <View style={styles.resetPasswordBody}>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginheader: {
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
  resetPasswordBody: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    height: 708,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    width: 375,
    alignItems: "center",
  },
  login: {
    flex: 1,
    height: 812,
    alignItems: "center",
    width: "100%",
  },
});

export default Login;
