import React, { Component } from 'react';
import PlaceItem from './PlaceItem';

class PlaceList extends Component {
  render() {
    return (
      <div>
        <h2>Place list</h2>
        <div className="places-list d-flex flex-wrap">
          {this.props.places.map((place) => (
            <PlaceItem place={place} key={place} />
          ))}
        </div>
      </div>
    );
  }
}

export default PlaceList;
