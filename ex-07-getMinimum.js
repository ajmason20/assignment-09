
// Part 07 : getMinimum()

// Write a function cthat will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

function getMinimum(num1, num2, num3, num4){
  if(num1 < num2 && num3 && num4) {
    return num1;
  } else if((num2 < num1) && (num2 < num3) && (num2 < num4)) {
    return num2;
  } else if((num3 < num1) && (num3 < num2) && (num3 < num4)) {
    return num3;
  } else if((num4 < num1) && (num4 < num2) && (num4 < num3)) {
    return num4;
  }
  if(num4){

  }

}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
