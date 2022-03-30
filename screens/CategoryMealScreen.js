import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colours from '../constants/Colours';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categoriey Meal Screen</Text>
      <Button
        title="Go To Meal Details"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

// navigationOptions is added as a method to the screen,
// as the react screen is just a javascript componant

CategoryMealScreen.navigationOptions = navigationData => {
  // get the categoryId passed in as a navigation prop

  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? Colours.primaryColour : 'white',
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colours.primaryColour,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
