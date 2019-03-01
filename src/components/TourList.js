import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TourDetail from './TourDetail';

export default class TourList extends Component {
  state = { tours: [] };
  componentWillMount() {
    fetch(
      'https://gist.githubusercontent.com/marioborras/7ec29ea22f9469704f764237d1a8b0a0/raw/d12b3e87ea2fc59955f4cf55c628cc99a5135f1e/tours.json'
    )
      .then(response => response.json())
      .then(data => this.setState({ tours: data }))
      .catch(error => {
        console.log(error);
      });
  }

  renderTours() {
    return this.state.tours.map(tour => <TourDetail key={tour.title} tour={tour} />);
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderTours()}</ScrollView>;
  }
}
