import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";
import TextDefault from "../components/TextDefault";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <TextDefault>{props.children}</TextDefault>
    </View>
  );
};
const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
      isFav: currentMealIsFavorite,
    });
  }, [toggleFavoriteHandler, currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <TextDefault>{selectedMeal.duration}m</TextDefault>
        <TextDefault>{selectedMeal.complexity.toUpperCase()}</TextDefault>
        <TextDefault>{selectedMeal.affordability.toUpperCase()}</TextDefault>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButton
        title={isFavorite === true ? "Make it UnFav" : "Make it fav"}
        // title="fav"
        onPress={toggleFavorite}
      />
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   <Item
      //     title="Favorite"
      //     iconName="ios-star"
      //     onPress={() => console.log("Alert!!!")}
      //   />
      // </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
export default MealDetailScreen;
