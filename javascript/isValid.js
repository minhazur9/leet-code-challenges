/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const regExp = new RegExp("\\(\\)|\\[\\]|{}", "g");
  while (s !== "") {
    if (s.match(regExp)) s = s.replace(regExp, "");
    else return false;
  }
  return true;
};

console.time("performance");
console.log(isValid("{[]}"));
console.timeEnd("performance");
