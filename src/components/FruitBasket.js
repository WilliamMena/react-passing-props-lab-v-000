import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter filters={this.props.filters} handleChange={this.handleFilterChange} />
//         <FilteredFruitList fruit={this.props.fruit}
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = (props) => {


  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
      <FilteredFruitList fruit={props.fruit}
        filter={props.filter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
