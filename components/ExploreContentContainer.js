import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { Image } from "expo-image";
import OffersList from "./OffersList";
import RecentsHeader from "./RecentsHeader";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ExploreContentContainer = () => {
  const [recentsFlatListData, setRecentsFlatListData] = useState([
    <OffersList />,
  ]);

  return (
    <View style={styles.exploreContent}>
      <View style={styles.openOrdersSection}>
        <View style={styles.openOrdersHeader}>
          <Text style={styles.openOrders}>Open Orders</Text>
          <Text style={styles.view}>View</Text>
        </View>
        <View style={[styles.frameParent, styles.group13FlexBox]}>
          <View style={[styles.group13Wrapper, styles.group13WrapperFlexBox]}>
            <View style={[styles.group13, styles.group13FlexBox]}>
              <Text style={styles.text}>45</Text>
            </View>
          </View>
          <Image
            style={[styles.line3Icon, styles.line3IconFlexBox]}
            contentFit="cover"
            source={require("../assets/line3.png")}
          />
          <View
            style={[styles.pendingOrdersParent, styles.group13WrapperFlexBox]}
          >
            <Text style={[styles.pendingOrders, styles.ordersTypo]}>
              43 pending orders
            </Text>
            <Text style={[styles.overdueOrders, styles.ordersTypo]}>
              2 overdue orders
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.recents}
        data={recentsFlatListData}
        ListHeaderComponent={<RecentsHeader />}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.recentsFlatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentsFlatListContent: {
    flexDirection: "column",
  },
  group13FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  group13WrapperFlexBox: {
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  line3IconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  ordersTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "700",
  },
  openOrders: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interBold,
    color: Color.gray,
    textAlign: "left",
    fontWeight: "700",
  },
  view: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.cornflowerblue,
    textAlign: "left",
  },
  openOrdersHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.robotoBold,
    color: Color.cornflowerblue,
    textAlign: "left",
    fontWeight: "700",
  },
  group13: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  group13Wrapper: {
    paddingTop: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  line3Icon: {
    maxWidth: "100%",
    height: 1,
    width: "100%",
  },
  pendingOrders: {
    color: Color.cornflowerblue,
  },
  overdueOrders: {
    color: Color.crimson,
  },
  pendingOrdersParent: {
    paddingBottom: Padding.p_xs,
    justifyContent: "space-between",
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    marginTop: 14,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  openOrdersSection: {
    alignSelf: "stretch",
  },
  recents: {
    flex: 1,
    marginTop: 30,
    alignSelf: "stretch",
  },
  exploreContent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
});

export default ExploreContentContainer;
