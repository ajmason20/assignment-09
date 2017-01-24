

// Part 07: justOneString()

// Using logical operators, write a function called `justOneString()`
// that accepts two arguments and will return true if either input is a string,
// but returns false if both arguments or neither are strings.

// function justOneString(input1, input2){
//   if(typeof input1 === "string" || typeof input2 === "string") {
//     return true;
//   } else if (typeof input1 === "string" && typeof input2 === "string") {
//     return false;
//   } else if (typeof input1 !== "string" && typeof input2 !== "string") {
//      return false;
//   }
// }
function justOneString(input1, input2) {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return false;
  } else if (typeof input1 !== "string" && typeof input2 !== "string") {
      return false;
  } else {
    return true;
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,true) === false)
