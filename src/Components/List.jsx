import React from "react";
import { Add, Subtract, Multiply, Divide } from "./math";

function List() {
  return (
    <ul>
      <li> {Add(1, 2)} </li>
      <li> {Multiply(2, 3)} </li>
      <li> {Subtract(7, 2)} </li>
      <li>{Divide(5, 2)} </li>
    </ul>
  );
}
export default List;
