import React from 'react'
import {add, sub, mult, div} from './Calc'

function Body() {

return (
    <>
    <ul>
        <li>Add of two numbers is: {add(11,32)}</li>
        <li>Sub of two numbers is: {sub(65,32)}</li>
        <li>Multi of two numbers is: {mult(15,53)}</li>
        <li>Div of two numbers is: {div(20,3)}</li>
    </ul>
</>
);
}
export default Body