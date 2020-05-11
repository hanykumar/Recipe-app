import { MEALS } from "../../data/dummy-data";
import { TOGLLE_FAVORITE } from "../actions/meals";
import { SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const meals = state.meals;
      const appliedFilters = action.filters;
      const updateFilteredMeals = meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenfree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactosefree) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        return true;
      });
      return { ...state, filteredMeals: updateFilteredMeals };
    default:
      return state;
  }
};
export default mealsReducer;
