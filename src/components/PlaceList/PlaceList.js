import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => (
  <FlatList 
    style={styles.listContainer}
    data={props.places} 
    keyExtractor={item => item.key.toString()}
    renderItem={({ item }) => (
      <ListItem 
        placeName={item.name}
        placeImage={item.image}
        onItemPress={() => props.onSelectedItemHandler(item.key)}
      /> 
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;