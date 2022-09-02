const sumAll = function(number1, number2) {
  let summed = 0;
  let first = 0;
  let second = 0;

  if (number1 < 0 || number2 < 0) {
    return 'ERROR'
  }

  if (typeof(number1) !== 'number' || typeof(number2) !== 'number') {
    return 'ERROR'
  }

  if (number2 < number1) {
    first = number2;
    second = number1;
  } else {
    first = number1;
    second = number2
  }

  for (i = first; i <= second; i++) {
    summed += i
  }
  return summed
};

// Do not edit below this line
module.exports = sumAll;
