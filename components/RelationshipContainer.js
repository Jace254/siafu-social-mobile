import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RelationshipContainer = () => {
  return (
    <View style={styles.offerCard}>
      <Text style={[styles.tableTop, styles.tableTopFlexBox]}>Table Top</Text>
      <View style={[styles.frameParent, styles.wrapperFlexBox]}>
        <LinearGradient
          style={[styles.wrapper, styles.wrapperFlexBox]}
          locations={[0, 1]}
          colors={["#10579b", "#32d4ad"]}
        >
          <Text style={styles.text}>20</Text>
        </LinearGradient>
        <View style={styles.activeOutletsWrapper}>
          <Text style={[styles.activeOutlets, styles.tableTopFlexBox]}>
            {" "}
            Active Outlets
          </Text>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableTopFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tableTop: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    textAlign: "center",
    lineHeight: 18,
  },
  wrapper: {
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_8xl,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  activeOutlets: {
    fontSize: FontSize.size_base,
    fontWeight: "800",
    fontFamily: FontFamily.robotoExtrabold,
    color: Color.lightslategray,
    lineHeight: 18,
  },
  activeOutletsWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  frameChild: {
    width: 7,
    height: 11,
    marginLeft: 16,
  },
  frameParent: {
    marginTop: 7,
    alignSelf: "stretch",
  },
  offerCard: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_smi,
    marginTop: 14,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default RelationshipContainer;
