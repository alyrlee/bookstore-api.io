import React, { Component } from 'react'
import Display from './Display';

export default class BookType extends Component{
    render(){
   
  const selectOptions = this.props.selectOptions.bookSelections;
  const bookOptions = selectOptions.BookType.map((options, i) => (
   <option value={options} key={i}> 
    {options}
  </option>  
  )); 

    return (
        <div>
          <Display 
          
          bookOptions={bookOptions}
          printOnChange={this.bookOnChange}
          
          />
        </div>

    );
  }
}

