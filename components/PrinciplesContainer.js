import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import RelationshipContainer from "./RelationshipContainer";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const PrinciplesContainer = () => {
  return (
    <View style={styles.offersList}>
      <View style={[styles.listHeader, styles.listHeaderFlexBox]}>
        <RNPTextInput
          style={styles.outlinedtextOnlyNoIcon}
          placeholder="Search"
          mode="outlined"
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
      </View>
      <View style={[styles.addnewrealtionbutton, styles.listHeaderFlexBox]}>
        <Text style={styles.addNewRelation}>Add New Relation</Text>
      </View>
      <RelationshipContainer />
      <RelationshipContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  listHeaderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  outlinedtextOnlyNoIcon: {
    height: 56,
    alignSelf: "flex-start",
    flex: 1,
  },
  listHeader: {
    paddingBottom: Padding.p_2xs,
  },
  addNewRelation: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.cornflowerblue,
    textAlign: "center",
  },
  addnewrealtionbutton: {
    justifyContent: "flex-end",
    marginTop: 14,
  },
  offersList: {
    flex: 1,
  },
});

export default PrinciplesContainer;
