const fibonacci = function(num) {

  if (num <= 0) return 'OOPS'
  let array = [1];
  let j = 1

  for (let i = 1; i <= num -1; i++) {
    if (i === 1) {
      array.push(i);;
    } else {
      array.push(array[i-1] + array[i-2])
    }
  };
  return array.pop()
}



// Do not edit below this line
module.exports = fibonacci;
