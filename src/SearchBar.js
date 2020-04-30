import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from './SearchBox';
import FilterOptions from './FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox searchTerm={this.props.searchTerm} />
          <FilterOptions filterOption={this.props.filterOption} />
        </div>
      </div>
    );
  }
}

  export default SearchBar;