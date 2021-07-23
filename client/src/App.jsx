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
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewPlace={this.createNewPlace} />
          <PlaceList onDelete={this.deletePlace} places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
