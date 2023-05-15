import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailsSection}>
      <View style={styles.oneWaySection}>
        <View style={styles.form}>
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon,
              styles.outlinedtextIconFlexBox,
            ]}
            placeholder="example@mail.com"
            label="Email"
            mode="outlined"
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[styles.outlinedtextOnlyNoIcon1, styles.buttonsSpaceBlock]}
            placeholder="*********"
            label="Password"
            mode="outlined"
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
            <Pressable
              style={[styles.buttonPrimary, styles.buttonFlexBox]}
              onPress={() => Linking.openURL("https://siafusocial.com")}
            >
              <Text style={[styles.viewDetails, styles.viewTypo]}>
                <Text style={styles.dontHaveAn}>Don’t Have an account?</Text>
                <Text style={styles.apply}> Apply</Text>
              </Text>
            </Pressable>
            <Pressable
              style={[styles.buttonPrimary1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={[styles.viewDetails, styles.viewTypo]}>
                <Text style={styles.dontHaveAn}>Forgot Your Password?</Text>
                <Text style={styles.textTypo}>{` `}</Text>
                <Text style={styles.apply}>Reset</Text>
              </Text>
            </Pressable>
            <TouchableOpacity
              style={[styles.buttonPrimary2, styles.buttonFlexBox]}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Home" })
              }
            >
              <Text style={[styles.viewDetails2, styles.textTypo]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  buttonsSpaceBlock: {
    marginTop: 18,
    width: 313,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
    width: 313,
    paddingVertical: Padding.p_3xs,
  },
  viewTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
  },
  outlinedtextOnlyNoIcon: {
    width: 313,
    alignSelf: "flex-start",
    height: 56,
  },
  outlinedtextOnlyNoIcon1: {
    alignSelf: "flex-start",
    height: 56,
  },
  dontHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
  },
  apply: {
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
  },
  viewDetails: {
    color: Color.darkslateblue_200,
    width: 229,
  },
  buttonPrimary: {
    top: 100,
    backgroundColor: Color.white,
  },
  buttonPrimary1: {
    top: 0,
    backgroundColor: Color.white,
  },
  viewDetails2: {
    color: Color.white,
    width: 120,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  buttonPrimary2: {
    top: 50,
    backgroundColor: Color.orange,
  },
  buttons: {
    height: 152,
  },
  form: {
    alignSelf: "stretch",
  },
  oneWaySection: {
    height: 310,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  detailsSection: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 341,
    padding: Padding.p_sm,
    backgroundColor: Color.white,
  },
});

export default LoginForm;
