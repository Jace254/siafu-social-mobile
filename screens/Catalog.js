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
import PrincipleContainer from "../components/PrincipleContainer";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const Catalog = () => {
  return (
    <View style={styles.catalog}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.principlesBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.principlesBodyScrollViewContent}
      >
        <View style={styles.listItems}>
          <View style={styles.principleCardHolder}>
            <PrincipleContainer />
            <PrincipleContainer />
            <PrincipleContainer />
            <PrincipleContainer />
            <PrincipleContainer />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  principlesBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
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
  principleCardHolder: {
    paddingBottom: 9,
    alignSelf: "stretch",
  },
  listItems: {
    alignSelf: "stretch",
  },
  principlesBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  catalog: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Catalog;
