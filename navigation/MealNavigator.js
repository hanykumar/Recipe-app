import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "ios" ? "white" : Colors.primary,
  },
  headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
  headerTitle: "A Screen",
};

const MealNavigator = createStackNavigator(
  {
    Catagories: {
      screen: CatagoriesScreen,
    },
    CatagoryMeals: {
      screen: CatagoryMealsScreen,
    },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const favStackNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const filtersNavigator = createStackNavigator({
  Filters: FilterScreen,
});

const tabScreenConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favorites: {
    screen: favStackNavigator,
    navigationOptions: {
      tabBarLabel: "My Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" color={tabInfo.tintColor} size={25} />;
      },
      tabBarColor: Colors.accent,
    },
  },
};
const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primary,
        shifting: false,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Platform.OS === "ios" ? Colors.primary : "white",
        },
      });
const MainNavigator = createDrawerNavigator({
  MealFavs: MealFavTabNavigator,
  Filters: filtersNavigator,
});
export default createAppContainer(MainNavigator);
