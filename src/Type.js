import React, { Component } from 'react';


class Type extends Component {
  render() {
    return (
        <div>
            <form >
            <label>Print Type:</label>
                <select 
                    name="print-type-filter">
                    <option 
                        value="all">
                        All
                    </option>
                    <option 
                        value="books">
                        Only Books
                    </option>
                    <option 
                        value="magazines">
                        Only Magazines
                    </option>
                </select>
            </form>
    
            <form> 
               <label>Book Type:</label> 
                <select 
                    name="book-type-filter">
                    <option 
                        value="ebooks">
                            All eBooks
                    </option>
                    <option 
                        value="free-ebooks">
                        Free eBooks
                    </option>
                    <option 
                        value="paid-ebooks">
                        Paid eBooks
                        </option>
                    <option 
                        value="full">
                        Fully Available eBooks
                    </option>
                    <option 
                        value="partial">
                        Partially Available eBooks
                    </option>
                </select>
            </form> 
        </div>
    );
}
}

export default Type;







// import React from 'react'

// export default function Type (props){
//  render() {
//      const selectOptionsBook = this.selectOptions.bookOptions;
//      const bookOptions = selectOptionsBook.map((options, i) => (
//         <option value={options} key={i}>
//         {options}
//       </option> 

//      ))
//      const selectOptionsPrint = this.selectOptions.printOptions;
//      const printOptions = selectOptionsPrint.map((options, i) => (
//      <option value={options} key={i}>
//         {options}
//       </option> 
    
//     ))
    
//     return (
//         <div>
//         <select
//         onChange={
//           (e => props.printChangeHandler(e.target.value)) ||
//           (e => props.bookChangeHandler(e.target.value))
//         }
//       >
//         {props.bookOptions} {props.printOptions}
//       </select>
//       </div>
//     );
//   };
// }

