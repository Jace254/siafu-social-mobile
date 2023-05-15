import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";

const Header3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.hamburgerIcon}
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/hamburger-icon.png")}
          />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image
            style={[styles.logoIcon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Pressable
          style={styles.profile}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Profile" })
          }
        >
          <Image
            style={styles.group3Icon}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={[styles.ovalIcon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/oval.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
  },
  iconPosition3: {
    top: 0,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  hamburgerIcon: {
    width: 32,
    height: 32,
  },
  logoIcon: {
    left: 0,
    height: 36,
    width: 100,
  },
  logo: {
    width: 100,
    alignSelf: "stretch",
  },
  group3Icon: {
    width: 36,
    zIndex: 0,
    height: 36,
  },
  ovalIcon: {
    left: 26,
    width: 10,
    height: 10,
    zIndex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  view: {
    padding: Padding.p_base,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Header3;
