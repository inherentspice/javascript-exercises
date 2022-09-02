const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
  let summed = 0;
	for (let i = 0; i < array.length; i++) {
    summed += array[i];
  }
  return summed;
};

const multiply = function(numbers) {
  let postMultiplied = 1

  for (let i = 0; i < numbers.length; i++) {
    postMultiplied *= numbers[i];
  };
  return postMultiplied;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
	factorized = 1;

  for (let i = 1; i <= number; i++) {
    factorized *= i;
  };
  return factorized
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
