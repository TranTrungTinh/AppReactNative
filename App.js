import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/assets/a.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {

  state = {
    playName: '',
    places: [],
    selectedPlace: null
  }

  placeNameChangeHandler = value => {
    this.setState({ playName: value });
  }

  placeSubmitHandler = () => {
    if( this.state.playName.trim() === "" ) return;
    const item = { 
      key: Math.random(), 
      name: this.state.playName, 
      image: placeImage 
    };
    this.setState(preState => ({ 
      places: [...preState.places, item] 
    }));
  }

  placeSelectedHandler = key => {
    this.setState( preState => ({
      selectedPlace: preState.places.find(place => place.key === key)
    }));
  }

  placeDeleteHandler = () => {
    this.setState( preState => ({
      places: preState.places.filter(place => place.key !== preState.selectedPlace.key),
      selectedPlace: null
    }));
  }

  modelCloseHandler = () => {
    this.setState({ selectedPlace: null });
  }

  render() {
    const { places, playName, selectedPlace } = this.state;
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={selectedPlace} 
          onDeleteItem={this.placeDeleteHandler} 
          onCloseModel={this.modelCloseHandler}
        />
        <PlaceInput 
          playName={playName}
          onPlaceSubmitHandler={this.placeSubmitHandler.bind(this)}
          onPlaceNameChangeHandler={this.placeNameChangeHandler.bind(this)}
        />
        <PlaceList 
          places={places}
          onSelectedItemHandler={this.placeSelectedHandler}
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
