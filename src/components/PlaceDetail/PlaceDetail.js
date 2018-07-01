import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
  const modelContent = props.selectedPlace ? (
    <View>
      <Image style={styles.placeDetailImage} source={props.selectedPlace.image} />
      <Text style={styles.placeDetailTitle} > {props.selectedPlace.name} </Text>
    </View>
  ) : null;
  return (
    <Modal visible={ props.selectedPlace !== null } animationType="slide" >
      <View style={styles.placeDetailContent} >
        {modelContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onDeleteItem}/>
          <Button title="Close" onPress={props.onCloseModel}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  placeDetailContent: {
    margin: 50
  },
  placeDetailImage: {
    width: "100%",
    height: 200
  },
  placeDetailTitle: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center"
  }
});

export default placeDetail;