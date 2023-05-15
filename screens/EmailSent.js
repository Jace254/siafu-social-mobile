import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const EmailSent = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.emailsent, styles.emailsentFlexBox]}>
      <StatusBar barStyle="default" />
      <View style={styles.frame}>
        <View style={styles.emailsentimage}>
          <View style={styles.illustrationPlaceholder}>
            <View style={[styles.container, styles.containerPosition]} />
            <Image
              style={[styles.slideImageIcon, styles.containerPosition]}
              contentFit="cover"
              source={require("../assets/slide-image.png")}
            />
          </View>
          <View style={[styles.primaryText, styles.emailsentFlexBox]}>
            <Text style={styles.primaryTitle}>
              Check Your Email For Reset Link
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonPrimaryWrapper}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.viewDetails}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailsentFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
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
    fontFamily: FontFamily.ralewayBold,
    color: "#374ecd",
    display: "flex",
    alignItems: "flex-end",
    width: 343,
    textAlign: "center",
    justifyContent: "center",
  },
  primaryText: {
    height: 96,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_6xl,
    justifyContent: "center",
    width: 372,
    alignItems: "center",
  },
  emailsentimage: {
    alignSelf: "stretch",
    width: 372,
  },
  frame: {
    height: 555,
    flexDirection: "row",
    width: 375,
  },
  viewDetails: {
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemibold,
    color: Color.white,
    width: 120,
    textAlign: "center",
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
    width: 351,
    height: 50,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonPrimaryWrapper: {
    height: 213,
    paddingHorizontal: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    width: 375,
    alignItems: "center",
  },
  emailsent: {
    flex: 1,
    width: "100%",
    height: 812,
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default EmailSent;
