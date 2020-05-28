import React from 'react'

export default function BookDisplay(props) {
    return (
      <select
        onChange={
          (e => props.printOnChange(e.target.value)) ||
          (e => props.bookOnChange(e.target.value))
        }
      >
        {props.bookOptions} {props.printOptions}
      </select>
    );
  }