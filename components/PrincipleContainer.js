import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const PrincipleContainer = () => {
  return (
    <View style={styles.principleCard}>
      <View style={[styles.principleCardInner, styles.frameGroupFlexBox]}>
        <View style={styles.groupParentFlexBox}>
          <View style={styles.groupChildLayout}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
          <Text style={[styles.marsyetu, styles.brandsSpaceBlock]}>
            MarsYetu
          </Text>
        </View>
      </View>
      <Image
        style={styles.line3Icon}
        contentFit="cover"
        source={require("../assets/line3.png")}
      />
      <View style={[styles.frameParent, styles.frameSpaceBlock]}>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.chairParent}>
            <Image
              style={styles.chairIcon}
              contentFit="cover"
              source={require("../assets/chair.png")}
            />
            <Text style={[styles.brands, styles.brandsTypo]}>80 brands</Text>
          </View>
          <View style={styles.groupParentFlexBox}>
            <Text style={[styles.estimatedEarning, styles.brandsTypo]}>
              Estimated earning
            </Text>
            <Text style={[styles.text, styles.textTypo]}>200000</Text>
          </View>
        </View>
        <View style={[styles.buttonPrimary, styles.groupParentFlexBox]}>
          <Text style={[styles.viewDetails, styles.textTypo]}>
            View Products
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  groupChildLayout: {
    height: 32,
    width: 48,
  },
  brandsSpaceBlock: {
    marginLeft: 8,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  brandsTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  textTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 24,
  },
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image2Icon: {
    top: 12,
    left: 5,
    width: 36,
    height: 8,
    position: "absolute",
  },
  marsyetu: {
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  principleCardInner: {
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_xs,
    alignSelf: "stretch",
  },
  line3Icon: {
    maxWidth: "100%",
    height: 1,
    width: "100%",
    marginTop: 14,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  chairIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  brands: {
    width: 85,
    color: Color.gray,
    marginLeft: 8,
    textAlign: "left",
  },
  chairParent: {
    flexDirection: "row",
  },
  estimatedEarning: {
    color: Color.silver,
    width: 105,
    textAlign: "right",
  },
  text: {
    fontSize: FontSize.size_base,
    marginLeft: 4,
    textAlign: "right",
    color: Color.gray,
  },
  frameGroup: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_9xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewDetails: {
    color: Color.white,
    textAlign: "center",
    width: 120,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 24,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent: {
    paddingBottom: Padding.p_xs,
    marginTop: 14,
  },
  principleCard: {
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
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default PrincipleContainer;
