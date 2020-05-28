import React, { Component } from 'react'
import BookDisplay from './BookDisplay';

export default class BookType extends Component{
    render(){
   

  const selectOptions = this.props.selectOptions.bookSelections;
  const bookOptions = selectOptions.map((options, i) => (
   <option value={options} key={i}> 
    {options}
  </option>  
  )); 

    return (
        <div>
        <BookDisplay
          
          bookOptions={bookOptions}
          printOnChange={this.bookOnChange}
          
          />
        </div>

    );
  }
}

