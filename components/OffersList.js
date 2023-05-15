import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const OffersList = ({ style }) => {
  return (
    <View style={[styles.offersList, style]}>
      <View style={styles.activityCardShadowBox}>
        <View>
          <View style={styles.frameFlexBox}>
            <View style={[styles.orderWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.order, styles.orderTypo]}>Order</Text>
            </View>
          </View>
          <View style={styles.ksh20000OrderPlacedForKwaParent}>
            <Text style={styles.ksh20000OrderContainer}>
              <Text style={styles.text1Typo}>{`Ksh 20000 `}</Text>
              <Text style={styles.orderPlacedFor}>{`order placed for `}</Text>
              <Text style={styles.orderTypo}>Kwa Jenga wa Njuguna Shop</Text>
            </Text>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.potentialEarning200Wrapper}>
                <Text style={styles.potentialEarning200Container}>
                  <Text style={styles.orderPlacedFor}>
                    <Text style={styles.potentialEarning1}>
                      Potential Earning:
                    </Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={[styles.text1, styles.text1Typo]}>200</Text>
                </Text>
              </View>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.activityCard1, styles.activityCardShadowBox]}>
        <View>
          <View style={styles.frameFlexBox}>
            <View style={[styles.surveyWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.order, styles.orderTypo]}>Survey</Text>
            </View>
          </View>
          <View style={styles.ksh20000OrderPlacedForKwaParent}>
            <Text style={styles.ksh20000OrderContainer}>
              <Text style={styles.text1Typo}>Product Survey</Text>
              <Text
                style={styles.orderPlacedFor}
              >{`  carried out for Marsyetu on `}</Text>
              <Text style={styles.muriukiShop}>Muriuki Shop</Text>
            </Text>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.potentialEarning200Wrapper}>
                <Text style={styles.potentialEarning200Container}>
                  <Text style={styles.orderPlacedFor}>
                    <Text style={styles.potentialEarning1}>
                      Potential Earning:
                    </Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={[styles.text1, styles.text1Typo]}>2</Text>
                </Text>
              </View>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  orderTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 313,
  },
  text1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  activityCardShadowBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_mini,
    height: 161,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  order: {
    fontSize: FontSize.size_smi,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "center",
    lineHeight: 18,
  },
  orderWrapper: {
    backgroundColor: "#ff9921",
  },
  orderPlacedFor: {
    fontFamily: FontFamily.robotoRegular,
  },
  ksh20000OrderContainer: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    color: Color.gray,
    textAlign: "left",
    width: 313,
  },
  potentialEarning1: {
    color: Color.black,
  },
  text: {
    color: Color.lightslategray,
  },
  text1: {
    color: Color.darkslateblue_100,
  },
  potentialEarning200Container: {
    fontSize: FontSize.size_xl,
    width: 278,
    textAlign: "left",
    lineHeight: 18,
  },
  potentialEarning200Wrapper: {
    flex: 1,
  },
  frameChild: {
    width: 7,
    height: 11,
    marginLeft: 16,
  },
  frameGroup: {
    height: 46,
    marginTop: 7,
  },
  ksh20000OrderPlacedForKwaParent: {
    marginTop: 7,
  },
  surveyWrapper: {
    backgroundColor: "#3aa4c8",
  },
  muriukiShop: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
  },
  activityCard1: {
    marginTop: 14,
  },
  offersList: {
    width: 343,
    height: 336,
  },
});

export default OffersList;
