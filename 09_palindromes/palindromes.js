const palindromes = function (word) {
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  let i = 0;
  let j = word.length - 1;

  while (i <= j) {
    console.log(word[i], word[j])
    if (/[^a-zA-Z]/.test(word[i])) {
      i++;;
    } else if (/[^a-zA-Z]/.test(word[j])) {
      j--;
    }

    if (word[i] !== word[j]) {
      return false;
    };
    i++;
    j--;
  }
  return true
};

// Do not edit below this line
module.exports = palindromes;
