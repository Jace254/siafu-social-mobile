import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ForgotPasswordForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailsSection}>
      <View style={styles.resetPasswordSection}>
        <View style={styles.form}>
          <Pressable
            style={[styles.title, styles.titleFlexBox]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "Home" })
            }
          >
            <Text style={[styles.viewDetails, styles.viewTypo]}>
              Enter Your Account Email
            </Text>
          </Pressable>
          <RNPTextInput
            style={[styles.outlinedtextOnlyNoIcon, styles.buttonsSpaceBlock]}
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
          <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
            <TouchableOpacity
              style={[styles.buttonPrimary, styles.titleFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("EmailSent")}
            >
              <Text style={[styles.viewDetails1, styles.viewTypo]}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    width: 313,
    borderRadius: Border.br_8xs,
  },
  viewTypo: {
    textAlign: "center",
    fontFamily: FontFamily.ralewaySemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  buttonsSpaceBlock: {
    marginTop: 18,
    width: 313,
  },
  viewDetails: {
    color: Color.darkslateblue_200,
    width: 181,
  },
  title: {
    paddingHorizontal: 0,
    backgroundColor: Color.white,
  },
  outlinedtextOnlyNoIcon: {
    height: 56,
    alignSelf: "flex-start",
  },
  viewDetails1: {
    color: Color.white,
    width: 120,
  },
  buttonPrimary: {
    position: "absolute",
    top: 10,
    left: 0,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_xl,
  },
  buttons: {
    height: 64,
  },
  form: {
    alignSelf: "stretch",
  },
  resetPasswordSection: {
    height: 210,
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
    height: 233,
    padding: Padding.p_sm,
    backgroundColor: Color.white,
  },
});

export default ForgotPasswordForm;
