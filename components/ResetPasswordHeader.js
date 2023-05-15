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

const ResetPasswordHeader = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.resetpasswordheader, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.resetYourPasswordWrapper}>
          <Text style={styles.resetYourPassword}>Reset Your Password</Text>
        </View>
        <View style={[styles.iconKebab, styles.iconLayout1]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout1]}
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
  resetpasswordheader: {
    backgroundColor: Color.white,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  frameLayout1: {
    height: 5,
    width: 5,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  resetYourPassword: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.darkslateblue_100,
    textAlign: "left",
  },
  resetYourPasswordWrapper: {
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

export default ResetPasswordHeader;
