import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import PlaceList from './components/PlaceList';
import { getPlaces, updatePlaceSend, createPlaceSend, deletePlaceSend } from './utils/request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    this.getAllPlaces();
  }

  createNewPlace = async (dataToCreateNewPlace) => {
    const success = await createPlaceSend(dataToCreateNewPlace);
    if (success) {
      // atnaujinti sarasa places po ivedimo
      this.getAllPlaces();
      return true;
    }
  };

  getAllPlaces = async () => {
    // gaunam visas vietas is db
    const placesArr = await getPlaces();
    this.setState({ places: placesArr });
  };

  deletePlace = async (id) => {
    const success = await deletePlaceSend(id);
    if (success) {
      this.getAllPlaces();
    }
  };

  updatePlace = async (id, updatedDetails) => {
    console.log('about to update place', id, updatedDetails);
    const success = await updatePlaceSend(id, updatedDetails);
    success && this.getAllPlaces();
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewPlace={this.createNewPlace} />
          <PlaceList
            onUpdate={this.updatePlace}
            onDelete={this.deletePlace}
            places={this.state.places}
          />
        </div>
      </div>
    );
  }
}

export default App;
