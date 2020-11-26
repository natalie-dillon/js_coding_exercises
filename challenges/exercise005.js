const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let ind = nums.findIndex(num => num === n);
  if (ind === -1 || ind === nums.length - 1){
    return null;
  }
  return nums[ind + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {
    1: 0,
    0: 0
  };
  for (let i=0; i< str.length; i++){
    let chr = str[i];
    if (frequencies[chr] !== undefined)
    {
      frequencies[chr] += 1;
    }    
  }
  return frequencies;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let str = n.toString();
  let reverseStr = "";
  for (let i=str.length - 1; i >= 0; i--){
    if (str[i] != 0 || reverseStr.length > 0){
      reverseStr += str[i];
    }
  }
  return Number(reverseStr);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  for (let i=0; i< arrs.length; i++){
    for (let j=0; j< arrs[i].length; j++)
    {
      total += arrs[i][j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2){
    return arr;
  }
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (const needle in haystack){
    let val = haystack[needle].toString().toLowerCase();
    if (val.includes(searchTerm.toLowerCase()))
    {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {};
  const words = str.split(" ");
  words.forEach(word => {
      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (frequencies[cleanWord] === undefined){
        frequencies[cleanWord] = 1;
      } else {
        frequencies[cleanWord] += 1;
      }
  });
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
