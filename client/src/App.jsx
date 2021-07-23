import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  state = {};

  createNewPlace = (dataToCreateNewPlace) => {
    console.log('createNewPlace in app.jsx Fired');
    console.log('dataToCreateNewPlace', dataToCreateNewPlace);
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
