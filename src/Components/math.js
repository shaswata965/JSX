import React from "react";

function Add(x, y) {
  Sum = x + y;
  return Sum;
}
function Subtract(x, y) {
  Sub = x - y;
  return Sub;
}
function Multiply(x, y) {
  Mult = x * y;
  return Mult;
}
function Divide(x, y) {
  Div = x / y;
  return Div;
}

export { Add, Subtract, Multiply, Divide };
