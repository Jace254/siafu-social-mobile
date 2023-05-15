import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DrawerMenuItems = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Profile" })
      }
    >
      <View style={styles.menuItem}>
        <Image
          style={styles.iconlylightprofile}
          contentFit="cover"
          source={require("../assets/iconlylightprofile.png")}
        />
        <Text style={styles.profile}>Profile</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightprofile: {
    position: "relative",
    width: 24,
    height: 24,
  },
  profile: {
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray,
    textAlign: "left",
    marginLeft: 16,
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default DrawerMenuItems;
