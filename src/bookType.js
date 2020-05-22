import React, { Component } from 'react'
import Type from './Type'

class BookType extends Component{
    render(){
   
    return (
        <div>
          <Type bookTypeOption={this.props.option.value} />
        </div>
    )
  }
}

export default BookType;