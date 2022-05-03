import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import {Platform} from 'react-native';
import Colours from '../constants/Colours';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defautNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colours.primaryColour : '',
      },
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colours.primaryColour,
  },
);

export default createAppContainer(MealsNavigator);
