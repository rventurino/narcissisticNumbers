/*
A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. In this Kata, 
we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
*/

function narcissistic(value) {
  let valueString = "" + value;
  let valuePower = valueString.length;
  let valueArray = Array.from(String(value), Number);
  let resultValue = 0;
  for (let i = 0; i < valueArray.length; i++) {
    resultValue += Math.pow(valueArray[i], valueString.length);
  }
  if (resultValue === value) {
    return true;
  } else return false;
}

console.log(narcissistic(153));
