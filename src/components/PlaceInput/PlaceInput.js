import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class placeInput extends Component {
  state = { 
    placeName: ''
  }

  onPlaceChangeHandler = value => {
    this.setState({ placeName: value })
  }

  onAddPlaceHandler = () => {
    if(this.state.placeName.trim() === '') return;
    this.props.onPlaceSubmitHandler(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.placeInput}
        value={this.state.placeName}
        placeholder="Input text here"
        onChangeText={this.onPlaceChangeHandler} 
      />

      <Button 
        title="ADD" 
        onPress={this.onAddPlaceHandler}
        style={styles.placeButton}
      />
    </View>
    );
  }
}

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
