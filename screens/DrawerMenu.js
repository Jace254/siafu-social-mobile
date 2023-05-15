import React, { useState } from "react";
import DrawerMenuItems from "../components/DrawerMenuItems";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <DrawerMenuItems style={styles.mt20} />,
  ]);
  const [drawerItemsActive] = useState([
    <DrawerMenuItems style={styles.mt20} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;

  return (
    <SafeAreaView style={styles.drawerMenu}>
      <View style={styles.view}>
        <View style={styles.menu}>
          <View style={styles.profile}>
            <View style={styles.group3Wrapper}>
              <Image
                style={styles.group3Icon}
                contentFit="cover"
                source={require("../assets/group32.png")}
              />
            </View>
            <View style={styles.helloParent}>
              <Text style={[styles.hello, styles.helloClr]}>Hello</Text>
              <Text style={styles.mercyMumbi}>Mercy Mumbi</Text>
            </View>
          </View>
          <View style={styles.menuChild} />
          {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
        </View>
        <View style={styles.group3Wrapper}>
          <Text style={[styles.appVersion101, styles.profile1Layout]}>
            App version 1.0.1
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: 20,
  },
  drawerMenu: {
    flex: 1,
    backgroundColor: Color.white,
  },
  helloClr: {
    color: Color.lightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  profile1Layout: {
    lineHeight: 24,
    textAlign: "left",
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
  },
  mercyMumbi: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.gray,
    textAlign: "left",
  },
  helloParent: {
    marginLeft: 12,
  },
  profile: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  menu: {
    alignSelf: "stretch",
  },
  appVersion101: {
    fontSize: FontSize.size_sm,
    color: Color.lightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  view: {
    width: 320,
    height: 812,
    paddingHorizontal: 30,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    backgroundColor: Color.white,
  },
});

export default DrawerMenu;
