import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/assets/a.jpeg';

export default class App extends Component {

  state = {
    playName: '',
    places: []
  }

  placeNameChangeHandler = value => {
    this.setState({ playName: value });
  }

  placeSubmitHandler = () => {
    if( this.state.playName.trim() === "" ) return;
    const item = { key: Math.random(), name: this.state.playName, image: placeImage };
    this.setState(preState => ({ 
      places: [...preState.places, item] 
    }));
  }

  placeDeleteHandler = key => {
    this.setState( preState => ({
      places: preState.places.filter(place => place.key !== key)
    }));
  }

  render() {
    const { places, playName } = this.state;
    return (
      <View style={styles.container}>
        <PlaceInput 
          playName={playName}
          onPlaceSubmitHandler={this.placeSubmitHandler.bind(this)}
          onPlaceNameChangeHandler={this.placeNameChangeHandler.bind(this)}
        />
        <PlaceList 
          places={places}
          onDeleteItemHandler={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
