//display results

 //Received information collected from user

      //Search API

       //Return results

 //Receive results

     //Display on page 

     //Allow book to be clickable

     import React from 'react'

    export default function  Display(props) {
         return (
             <select
                onChange={
                    (e => props.printOnChange(e.target.value)) ||
                    (e => props.booktOnChange(e.target.value))
                }
                >
                {props.bookOptions} {props.printOptions}
            </select>            
         );
    }

