import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const BalanceContainer = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.balanceCard}
      locations={[0, 1]}
      colors={["#10579b", "#f99a0e"]}
    >
      <View style={styles.frameParent}>
        <View>
          <View>
            <Text style={[styles.availableBalance, styles.balanceTypo]}>
              Available Balance
            </Text>
            <View style={styles.kshParent}>
              <Text style={styles.ksh}>Ksh</Text>
              <Text style={[styles.text, styles.textTypo]}>2000.00</Text>
            </View>
          </View>
          <View style={styles.details1}>
            <Text style={[styles.actualBalance, styles.balanceTypo]}>
              Actual Balance
            </Text>
            <View style={styles.kshParent}>
              <Text style={styles.ksh}>Ksh</Text>
              <Text style={[styles.text1, styles.textTypo]}>500.00</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.towalletbutton}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Wallet" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/towalletbutton.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  balanceTypo: {
    height: 19,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
  },
  textTypo: {
    marginLeft: 15,
    display: "flex",
    fontFamily: FontFamily.balooBhai2Bold,
    fontSize: FontSize.size_13xl,
    height: 52,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
    alignItems: "center",
  },
  availableBalance: {
    width: 138,
  },
  ksh: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    width: 25,
    height: 17,
    textAlign: "left",
    color: Color.white,
  },
  text: {
    width: 247,
  },
  kshParent: {
    width: 286,
    marginTop: 5,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
  },
  actualBalance: {
    width: 116,
  },
  text1: {
    width: 263,
  },
  details1: {
    marginTop: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  towalletbutton: {
    width: 24,
    height: 24,
  },
  frameParent: {
    height: 162,
    alignItems: "center",
    flexDirection: "row",
  },
  balanceCard: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent",
    height: 200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_sm,
  },
});

export default BalanceContainer;
