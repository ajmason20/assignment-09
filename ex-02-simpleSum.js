
/**
 * PART 02 : simpleSum()
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

function simpleSum(num1, num2){
	var result = num1 + num2;
  return result;
}


console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
