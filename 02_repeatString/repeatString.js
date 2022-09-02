const repeatString = function(string, freq) {
  let echoString = string
  for (let i = 1; i < freq; i++) {
    echoString += string;
  };
  return echoString
};

// Do not edit below this line
module.exports = repeatString;
