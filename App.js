import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from './src/store/actions/index';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends Component {

  placeSubmitHandler = placeName => {
    this.props.addPlace(placeName);
  }

  placeSelectedHandler = key => {
    this.props.onSelectedPlace(key);
  }

  placeDeleteHandler = () => {
    this.props.deletePlace();
  }

  modelCloseHandler = () => {
    this.props.deSelectedPlace();
  }

  render() {
    const { places, selectedPlace } = this.props;
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={selectedPlace} 
          onDeleteItem={this.placeDeleteHandler} 
          onCloseModel={this.modelCloseHandler}
        />
        <PlaceInput 
          onPlaceSubmitHandler={this.placeSubmitHandler}
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

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

export default connect(mapStateToProps, actionCreators)(App);