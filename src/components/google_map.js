import React, { Component } from 'react';

// Can change this to react-googlemap component /tomchentw/react-google-maps
export default class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      zoom: 8
    });
  }

  render() {
    return <div ref="map" className="map"></div>;
  }
}
