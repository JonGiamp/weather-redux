import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderThead(count) {
    if(count === 0)
      return '';

    return (
      <tr>
        <th>Ville</th>
        <th>Température (C°)</th>
        <th>Pression (hPa)</th>
        <th>Humidité (%)</th>
      </tr>
    );
  }

  renderWeather(data) {
    const temps = data.list.map(weather => weather.main.temp - 273.15);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;
    const name  = data.city.name;

    return (
      <tr key={ data.city.id }>
        <td className="city__map">
          <GoogleMap lon={lon} lat={lat}/>
          <p className="city__name">{name}</p>
        </td>
        <td className="city__chart"><Chart data={temps} color="orange" units="C°"/></td>
        <td className="city__chart"><Chart data={pressures} color="green" units="hPa"/></td>
        <td className="city__chart"><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          { this.renderThead(this.props.weather.length) }
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => { return {weather} };
export default connect(mapStateToProps)(WeatherList);
