const reverseString = function(string) {
  let stringReversed = '';
  for (let i = string.length; i >= 0; i--) {
    stringReversed += string.charAt(i);
  };
  return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
