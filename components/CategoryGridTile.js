import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1, // fill out all space it has
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end', // puts it at botom
    alignItems: 'flex-end', // sends to bottom right
  },
});

export default CategoryGridTile;
