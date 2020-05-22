import React, { Component } from 'react'
import Type from './Type'


class PrintType extends Component {
    render() {

         return (
            <div>
                 <Type printTypeOption={this.props.option.value} />
            </div>
        );
    }
};

export default PrintType;