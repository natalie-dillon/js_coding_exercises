function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let priceWithVat = originalPrice + originalPrice * (vatRate / 100);
  return Number(priceWithVat.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let priceWithReduction = originalPrice - originalPrice * (reduction / 100);
  return Number(priceWithReduction.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str  is required");
  let mp = str.length / 2;
  if (str.length % 2 === 0) {
    return str.charAt(mp - 1) + str.charAt(mp);
  }
  return str.charAt(Math.floor(mp))
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res = res + word[i];
  }
  return res;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i])
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach((user) => {
    if (user.type.toLowerCase() === "linux") {
      count++;
    }
  })
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (scores.length === 0) return 0;
  let totalScore = 0;
  scores.forEach((score) => {
    totalScore += score;
  })
  let average = totalScore / scores.length;
  return Math.round(average * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  if (n % 3 === 0) {
    return "fizz";
  }
  if (n % 5 === 0) {
    return "buzz";
  }
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
