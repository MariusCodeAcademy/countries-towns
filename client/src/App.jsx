import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import axios from 'axios';
import PlaceList from './components/PlaceList';

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
    console.log('createNewPlace in app.jsx Fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);
    try {
      const createResult = await axios.post(
        'http://localhost:4000/api/place/new',
        dataToCreateNewPlace
      );
      // atnaujinti sarasa places po ivedimo
      this.getAllPlaces();
      console.log('createResult', createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  getAllPlaces = async () => {
    // gaunam visas vietas is db
    try {
      const allPlacesFromDb = await axios.get('http://localhost:4000/api/place');
      // jei gavom duomenis
      console.log('inside Try');
      if (Array.isArray(allPlacesFromDb.data) && allPlacesFromDb.data.length) {
        // nustatom state i tai ka gavom
        this.setState({ places: allPlacesFromDb.data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  deletePlace = async (id) => {
    console.log('you want to delete', id);
    try {
      const deleteResult = await axios.delete('http://localhost:4000/api/place/delete/' + id);
      // console.log('deleteResult', deleteResult.data);
      // atnaujinti sarasa kad neliktu ka istrynem
      if (deleteResult.data) {
        this.getAllPlaces();
      }
    } catch (error) {
      console.error(error);
    }
  };

  updatePlace = async (id, updatedDetails) => {
    console.log('about to update place', id, updatedDetails);
    try {
      const updateResult = await axios.put(
        'http://localhost:4000/api/place/update/' + id,
        updatedDetails
      );
      if (updateResult.data) this.getAllPlaces();
    } catch (error) {
      console.error(error);
    }
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
