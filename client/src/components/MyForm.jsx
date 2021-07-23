import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: 'USA',
    continent: '',
    population: '',
    placeType: 'town',
  };

  handleSubmitLocal = (e) => {
    const { name, continent, population, placeType } = this.state;
    e.preventDefault();
    console.log('stop right there');
    const dataToCreateNewPlace = {
      name,
      continent,
      population,
      placeType,
    };
    // console.log('dataToCreateNewPlace', dataToCreateNewPlace);
    this.props.onCreateNewPlace(dataToCreateNewPlace);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="w-50">
        <h2>Create new place</h2>
        <form onSubmit={this.handleSubmitLocal} autoComplete="off">
          <div className="form-group">
            <input
              value={s.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name of Place"
            />
          </div>
          <div className="form-group">
            <input
              value={s.continent}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="continent"
              placeholder="Continent"
            />
          </div>
          <div className="form-group">
            <input
              value={s.population}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="population"
              placeholder="Population"
            />
          </div>
          <select
            value={s.placeType}
            onChange={this.handleInput}
            name="placeType"
            className="custom-select"
          >
            <option value="town">Town</option>
            <option value="country">Country</option>
          </select>
          <button className="btn btn-primary my-4">Create</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
