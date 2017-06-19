import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import sleep from './sleep';
import Filter from './filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] };
  }
  componentDidMount() {
    fetch('/pizza.json')
      .then(res => res.json())
      .then(sleep(3)) // Simulate data loading over the network so loading shows.
      .then(res => this.setState({ pizzas: res.pizzas }));
  }
  render() {
    if (!this.state.pizzas.length) {
      return <div className="loader">Loading...</div>;
    }
    return <Filter items={this.state.pizzas} />
  }
}

export default App;
