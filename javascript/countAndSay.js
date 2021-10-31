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
  for (let i = 0; i < digitString.length; i++) {
    if (digitString[i] !== digitGroup) {
      result = result + counter + digitGroup;
      digitGroup = digitString[i];
      counter = 1;
    } else counter++;
  }
  result = result + counter + digitGroup;
  return result;
};

console.log(countAndSay(100));
