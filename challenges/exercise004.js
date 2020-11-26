function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => {
    return num < 1;
  });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => {
    return name.charAt(0) === char;
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => {
    return word.toLowerCase().startsWith("to ");
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => {
    return Number.isInteger(num);
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => {
    return user.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) => {
    return sentence.toLowerCase().includes(str.toLowerCase());
  });
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((triangle) => {
    return triangle.reduce(function (a, b, c) {
      return Math.max(a, b, c);
    });
  })
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
