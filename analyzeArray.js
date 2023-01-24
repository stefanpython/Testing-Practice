const analyzeArray = (array) => {
  let sum = array.reduce((a, b) => a + b, 0);
  let average = Math.round(sum / array.length);
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
