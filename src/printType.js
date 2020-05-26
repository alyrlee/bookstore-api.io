import React, { Component } from 'react'
import Display from './Display';


export default class PrintType extends Component{
    render(){
   
  const selectOptions = this.props.selectOptions.printSelections;
  const printOptions = selectOptions.PrintType.map((options, i) => (
   <option value={options} key={i}> 
    {options}
  </option>  
  )); 

    return (
        <div>
          <Display 
          
          bookOptions={printOptions}
          printOnChange={this.printOnChange}
          
          />
        </div>

    );
  }
}