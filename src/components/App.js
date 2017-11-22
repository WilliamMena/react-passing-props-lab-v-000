import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }


  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} />
    )
  }
}

// const App = () => <FruitBasket />;


export default App;
