import React, { Component } from 'react';

class PlaceItem extends Component {
  render() {
    const { place: p } = this.props;
    return (
      <div className={'card m-2 ' + (p.placeType === 'country' ? 'text-white bg-secondary ' : '')}>
        <div className="card-header">Place type: {p.placeType} </div>
        <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text">Continent: {p.continent}</p>
          <p className="card-text">Population: {p.population}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default PlaceItem;
