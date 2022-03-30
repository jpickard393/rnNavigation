import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategorieMealScreen = props => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategorieMealScreen;
