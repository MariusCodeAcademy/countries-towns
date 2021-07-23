import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    continent: '',
    population: null,
    placeType: '',
  };
  render() {
    return (
      <div className="w-50">
        <h2>Create new place</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="continent" placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="population" placeholder="Title" />
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
