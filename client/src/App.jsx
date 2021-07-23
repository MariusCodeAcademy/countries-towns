import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import axios from 'axios';

class App extends Component {
  state = {};

  createNewPlace = async (dataToCreateNewPlace) => {
    console.log('createNewPlace in app.jsx Fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);
    try {
      const createResult = await axios.post(
        'http://localhost:4000/api/place/new',
        dataToCreateNewPlace
      );
      console.log('createResult', createResult.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewPlace={this.createNewPlace} />
        </div>
      </div>
    );
  }
}

export default App;
