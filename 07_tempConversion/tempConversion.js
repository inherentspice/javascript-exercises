const ftoc = function(temperature) {
  let celcius = Math.ceil(((temperature - 32) * (5/9)) * 10);
  return celcius / 10
};

const ctof = function(temperature) {
  let farenheit = Math.ceil((temperature * (9/5) + 32) * 10);
  return farenheit / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
