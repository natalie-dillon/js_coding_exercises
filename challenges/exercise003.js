const {
  capitalize
} = require("./exercise001.js");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => {
    return num * num;
  });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length === 0) return "";
  let ret = words[0];
  words.forEach((word, i) => {
    if (i > 0) {
      ret += capitalize(word);
    }
  });
  return ret;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectCount = 0;
  people.forEach((person) => {
    subjectCount += person.subjects.length;
  });
  return subjectCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let dish = menu.find((dish) => {
    return dish.ingredients.includes(ingredient);
  });
  if (dish !== undefined) return true;
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicateValues = arr1.filter((num1) => {
      return arr2.includes(num1);
  });
  let distinctDuplicateValues = [...new Set(duplicateValues)];
  return distinctDuplicateValues.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
