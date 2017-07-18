import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = event => this.setState({term: event.target.value});

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Obtenez les prévisions métérologique des 5 prochains jours d'une ville"
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
          >Envoyer</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWeather }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
