import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import BalanceContainer from "../components/BalanceContainer";
import ExploreContentContainer from "../components/ExploreContentContainer";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.homeMainView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeMainViewContent}
      >
        <BalanceContainer />
        <ExploreContentContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  homeMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  homeLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconhomeLayout: {
    width: 20,
    height: 20,
  },
  searchTypo: {
    marginTop: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
  },
  homeMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  home: {
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Home;
