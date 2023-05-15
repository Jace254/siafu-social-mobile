import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Slide2 from "../components/Slide2";
import Slide1 from "../components/Slide1";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const Onboarding = () => {
  const [slidesItems, setSlidesItems] = useState([
    <Slide2 />,
    <Slide1 />,
    <Slide3 />,
    <Slide4 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <StatusBar barStyle="default" />
      <View style={styles.slides}>
        <Carousel
          width={Dimensions.get("window").width}
          mode="normal"
          autoPlay="true"
          data={slidesItems}
          renderItem={({ item }) => item}
        />
      </View>
      <View style={styles.barsnavBarsbottomstyle2}>
        <View style={[styles.stepsform1, styles.stepindicatorinactivePosition]}>
          <View
            style={[
              styles.stepindicatorCurrent,
              styles.stepindicatorinactivePosition,
            ]}
          >
            <View style={[styles.container, styles.containerPosition]} />
          </View>
          <View
            style={[
              styles.stepindicatorinactive,
              styles.stepindicatorinactivePosition,
            ]}
          >
            <View style={[styles.container1, styles.containerPosition]} />
          </View>
          <View
            style={[
              styles.stepindicatorinactive1,
              styles.stepindicatorinactivePosition,
            ]}
          >
            <View style={[styles.container1, styles.containerPosition]} />
          </View>
          <View
            style={[
              styles.stepindicatorinactive2,
              styles.stepindicatorinactivePosition,
            ]}
          >
            <View style={[styles.container1, styles.containerPosition]} />
          </View>
        </View>
      </View>
      <View style={styles.buttonPrimaryParent}>
        <TouchableOpacity
          style={[styles.buttonPrimary, styles.buttonFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.viewDetails, styles.viewTypo]}>Get Started</Text>
        </TouchableOpacity>
        <Pressable
          style={[styles.buttonPrimary1, styles.buttonFlexBox]}
          onPress={() => Linking.openURL("https://siafusocial.com")}
        >
          <Text style={[styles.viewDetails1, styles.viewTypo]}>
            <Text
              style={styles.dontHaveAnTypo}
            >{`Don’t have an account? `}</Text>
            <Text style={styles.apply}>Apply</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepindicatorinactivePosition: {
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  containerPosition: {
    height: 8,
    borderRadius: Border.br_13xl,
    marginTop: -4,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    height: 50,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  viewTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  slides: {
    height: 555,
    flexDirection: "row",
    width: 375,
  },
  container: {
    marginLeft: -12,
    backgroundColor: Color.lightsteelblue,
    width: 24,
  },
  stepindicatorCurrent: {
    right: 48,
    left: 0,
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  container1: {
    marginLeft: -4,
    backgroundColor: Color.whitesmoke_100,
    width: 8,
  },
  stepindicatorinactive: {
    right: 32,
    left: 32,
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  stepindicatorinactive1: {
    right: 16,
    left: 48,
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  stepindicatorinactive2: {
    right: 0,
    left: 64,
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  stepsform1: {
    marginLeft: -43.5,
    width: 88,
    left: "50%",
    height: 24,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  barsnavBarsbottomstyle2: {
    height: 80,
    width: 375,
    overflow: "hidden",
  },
  viewDetails: {
    color: Color.white,
    width: 120,
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
  },
  buttonPrimary: {
    backgroundColor: Color.orange,
    width: 351,
    paddingHorizontal: Padding.p_85xl,
  },
  dontHaveAnTypo: {
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
  },
  apply: {
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
  },
  viewDetails1: {
    color: Color.darkslateblue_200,
    width: 219,
  },
  buttonPrimary1: {
    width: 348,
    paddingHorizontal: 0,
    marginTop: 12,
    backgroundColor: Color.white,
  },
  buttonPrimaryParent: {
    paddingHorizontal: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    width: 375,
    alignItems: "center",
  },
  onboarding: {
    flex: 1,
    width: "100%",
    height: 803,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Onboarding;
