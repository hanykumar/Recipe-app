import React from "react";
import { StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGridTile from "../components/CatagoryGridTile";

const CatagoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    // console.log(itemData.item.title);
    return (
      <CatagoryGridTile
        title={itemData.item.title}
        keyExtractor={(item, index) => item.id}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CatagoryMeals",
            params: {
              catagoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList numColumns={2} renderItem={renderGridItem} data={CATEGORIES} />
  );
};

CatagoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Catagories",
    headerLeft: () => (
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   <Item title="Menu" iconName="ios-menu" onPress={() => {}} />
      // </HeaderButtons>
      <Button
        title="Menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CatagoriesScreen;
