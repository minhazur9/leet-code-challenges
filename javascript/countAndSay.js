/**
 * 38. Count and Say
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) return "1";
  const digitString = countAndSay(n - 1);
  let result = "";
  let counter = 0;
  let digitGroup = digitString[0];
  for (digit of digitString) {
    if (digit !== digitGroup) {
      result = result + counter + digitGroup;
      digitGroup = digit;
      counter = 1;
    } else counter++;
  }
  result = result + counter + digitGroup;
  return result;
};

console.time("performance");
console.log(countAndSay(5));
console.timeEnd("performance");
