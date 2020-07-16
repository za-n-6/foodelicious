import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen, //this is the shorter version.
  CategoryMeals: {
    screen: CategoryMealsScreen, //this is the longer version for telling react-native which screen should be loaded first.
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
