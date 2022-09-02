const repeatString = function(string, freq) {
  let echoString = '';
  if (freq > 0) {
    for (let i = 0; i < freq; i++) {
      echoString += string;
    };
  } else if (freq < 0) {
    return 'ERROR'
  }
  return echoString
}

// Do not edit below this line
module.exports = repeatString;
