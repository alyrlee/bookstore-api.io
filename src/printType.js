import React, { Component } from 'react'
import BookDisplay from './BookDisplay';



export default class PrintType extends Component{
    render(){
   
  const selectOptions = this.props.selectOptions.printSelections;
  const printOptions = selectOptions.map((options, i) => (
   <option value={options} key={i}> 
    {options}
  </option>  
  )); 

    return (
        <div>
         <BookDisplay 
          
          printOptions={printOptions}
          printOnChange={this.printOnChange}
          
          />
        </div>

    );
  }
}