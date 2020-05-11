import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import TextDefault from "../components/TextDefault";

const CatagoryMealScreen = (props) => {
  const catId = props.navigation.getParam("catagoryId");
  // const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.catagoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <TextDefault>
          No Meals Found! May be check out your filters!
        </TextDefault>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CatagoryMealScreen.navigationOptions = (navigationdata) => {
  const catId = navigationdata.navigation.getParam("catagoryId");
  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCatagory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CatagoryMealScreen;
