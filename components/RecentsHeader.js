import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RecentsHeader = ({ style }) => {
  return (
    <View style={[styles.recentsheader, style]}>
      <Text style={styles.recentActivity}>Recent Activity</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recentActivity: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.cornflowerblue,
    textAlign: "left",
  },
  recentsheader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RecentsHeader;
