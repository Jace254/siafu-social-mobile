import * as React from "react";
import {
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSection}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={[styles.header, styles.headerFlexBox]}>
          <Pressable
            style={[styles.iconBackWrapper, styles.wrapperShadowBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              contentFit="cover"
              source={require("../assets/icon--back1.png")}
            />
          </Pressable>
          <View
            style={[styles.fluentedit48RegularWrapper, styles.wrapperShadowBox]}
          >
            <Image
              style={styles.iconBack}
              contentFit="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View>
        </View>
        <View style={styles.profileBody}>
          <View style={[styles.profileDrawer, styles.wrapperShadowBox]}>
            <View style={styles.profileDetails}>
              <View style={styles.nameParticulars}>
                <View>
                  <Text style={styles.mercyMumbi}>Mercy Mumbi</Text>
                  <Text style={styles.kasaraniNairobi}>Kasarani, Nairobi</Text>
                </View>
              </View>
              <View
                style={[styles.profileDetailsChild, styles.profileSpaceBlock]}
              />
              <View style={[styles.profileOptions, styles.profileSpaceBlock]}>
                <View style={styles.profileOption}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/bicreditcard2back.png")}
                    />
                  </View>
                  <Text
                    style={[styles.paymentDetails, styles.referralCodeTypo]}
                  >
                    Payment Details
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/healthiconsvirusshieldoutline.png")}
                    />
                  </View>
                  <Text
                    style={[styles.paymentDetails, styles.referralCodeTypo]}
                  >
                    Covid Advisory
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      contentFit="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View style={styles.referralCodeParent}>
                    <Text style={styles.referralCodeTypo}>Referral Code</Text>
                    <View style={styles.newWrapper}>
                      <Text style={styles.new}>new</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text
                    style={[styles.paymentDetails, styles.referralCodeTypo]}
                  >
                    Settings
                  </Text>
                </View>
                <View style={styles.questionsFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text
                    style={[styles.paymentDetails, styles.referralCodeTypo]}
                  >
                    Logout
                  </Text>
                </View>
                <View style={[styles.questions, styles.questionsFlexBox]}>
                  <Image
                    style={styles.humbleiconsuserAsking}
                    contentFit="cover"
                    source={require("../assets/ionhelpcircleoutline.png")}
                  />
                  <Text style={styles.haveQuestionsWe}>
                    Have questions? We are here to help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImage}>
            <Image
              style={styles.group3Icon}
              contentFit="cover"
              source={require("../assets/group31.png")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileSectionScrollViewContent: {
    flexDirection: "column",
    paddingTop: 30,
  },
  headerFlexBox: {
    justifyContent: "space-between",
    padding: Padding.p_base,
  },
  wrapperShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  profileSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  referralCodeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    textAlign: "left",
    color: Color.gray,
  },
  questionsFlexBox: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  iconhomeLayout: {
    width: 20,
    height: 20,
  },
  searchTypo: {
    marginTop: 14,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconBackWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_7xs,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  fluentedit48RegularWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_7xs,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mercyMumbi: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.gray,
  },
  kasaraniNairobi: {
    marginTop: 2,
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  nameParticulars: {
    alignSelf: "stretch",
  },
  profileDetailsChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
  },
  rate: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.aliceblue_100,
    padding: Padding.p_7xs,
  },
  paymentDetails: {
    marginLeft: 16,
  },
  profileOption: {
    alignItems: "center",
    flexDirection: "row",
  },
  humbleiconsuserAsking: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  new: {
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  newWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: "#32d4ad",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  referralCodeParent: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  haveQuestionsWe: {
    color: Color.cornflowerblue,
    marginLeft: 8,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  questions: {
    borderRadius: 7,
    backgroundColor: "#eaf5ff",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  profileOptions: {
    height: 322,
  },
  profileDetails: {
    flex: 1,
  },
  profileDrawer: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_24xl,
    zIndex: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 1,
    alignSelf: "stretch",
  },
  group3Icon: {
    width: 90,
    height: 90,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
  },
  profileBody: {
    paddingTop: 42,
    marginTop: 50,
    alignSelf: "stretch",
    flex: 1,
  },
  profileSection: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileIcon: {
    width: "100%",
    height: 759,
    flex: 1,
  },
});

export default ProfileIcon;
