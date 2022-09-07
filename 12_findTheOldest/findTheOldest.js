const findTheOldest = function(people) {
  let currentTime = new Date().getFullYear();
  const oldestSort = people.sort(function (personOne, personTwo) {
    if (!personOne.yearOfDeath) {
      personOne.yearOfDeath = currentTime;
    }
    if (!personTwo.yearOfDeath) {
      personTwo.yearOfDeath = currentTime;
    }
    let personOneAge = personOne.yearOfDeath - personOne.yearOfBirth;
    let personTwoAge = personTwo.yearOfDeath - personTwo.yearOfBirth;
    return personOneAge > personTwoAge ? 1: -1
  });
  console.log(oldestSort)
  return oldestSort.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
