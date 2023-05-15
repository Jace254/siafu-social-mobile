import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const LoginHeader = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.loginheader, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.title}>
          <Text style={styles.welcomeToSiafu}>Welcome To Siafu Social</Text>
        </View>
        <View style={[styles.iconKebab, styles.iconLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginheader: {
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  welcomeToSiafu: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkslateblue_100,
    textAlign: "left",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    marginTop: 4,
  },
  ellipseParent: {
    position: "absolute",
    top: 5,
    left: 14,
    display: "none",
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LoginHeader;
