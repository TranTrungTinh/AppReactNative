import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => ( 
  <View style={styles.inputContainer}>
    <TextInput 
      style={styles.placeInput}
      value={ props.playName } 
      onChangeText={props.onPlaceNameChangeHandler}
      placeholder="Input text here" 
    />

    <Button 
      title="ADD" 
      onPress={props.onPlaceSubmitHandler}
      style={styles.placeButton}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    // borderColor: 'black',
    // borderWidth: 1
  },
  placeButton: {
    width: '30%'
  }
});

export default placeInput;