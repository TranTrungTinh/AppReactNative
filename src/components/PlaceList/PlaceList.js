import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => (
  <FlatList 
    style={styles.listContainer}
    data={props.places} 
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <ListItem 
        placeName={item.name}
        placeImage={item.image}
        onItemPress={() => props.onDeleteItemHandler(item.key)}
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