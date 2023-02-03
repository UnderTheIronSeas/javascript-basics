function negate(a) {
  // your code here
  return !a;
}

function both(a, b) {
  // your code here
  return a && b;
}

function either(a, b) {
  // your code here
  return a || b;
}

function none(a, b) {
  // your code here
  return !a && !b;
}

function one(a, b) {
  // your code here
  return (a === true && b === false) || (a === false && b === true);
}

function truthiness(a) {
  // your code here
  if (a) {
    return true;
  } else {
    return false;
  }
}

function isEqual(a, b) {
  // your code here
  return a === b;
  // if (a === b) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function isGreaterThan(a, b) {
  // your code here
  return a > b;
  // if (a > b) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
  // if (a <= b) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function isOdd(a) {
  // your code here
  return a % 2 !== 0;
}

function isEven(a) {
  // your code here
  return a % 2 === 0;
}

function isSquare(a) {
  // your code here
  if (Math.ceil(Math.sqrt(a)) === Math.floor(Math.sqrt(a))) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  // your code here
  return string.charAt(0) === char;
}

function containsVowels(string) {
  // your code here
  if (
    string.includes('a', 'e', 'i', 'o', 'u') ||
    string.includes('A', 'E', 'I', 'O', 'U')
  ) {
    return true;
  } else {
    return false;
  }
}

function isLowerCase(string) {
  // your code here
  if (string === string.toLoweCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
