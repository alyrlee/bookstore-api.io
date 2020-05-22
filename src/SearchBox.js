import React, { Component } from 'react';
// import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <input placeholder="Search term" value={this.props.searchEntry}/>
        <button>Search</button>
      </div>   
    );
  }
}

export default SearchBox;