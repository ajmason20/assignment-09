
// Part 05: isNegative()

// Write a function called isNegative that will tell
// whether a number is negative or not.

function isNegative(number){
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(10) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-999) === true )
