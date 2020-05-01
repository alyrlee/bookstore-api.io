import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;





// import React, { Component } from 'react';
// import './App.css';
// import SearchBar from './SearchBar';
// import FilterableList from './FilterableList';
// import Book from './Book'; 
// import Header from './Header';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: '',
//       filterOption: 'All'
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchBar
//           searchTerm={this.state.searchTerm}
//           filterOption={this.state.filterOption}/>
//         <FilterableList
//           files={this.props.files}  
//           searchTerm={this.state.searchTerm}
//           filterOption={this.state.filterOption}/>
//       </div>
//     );
//   }
// }

// export default App;