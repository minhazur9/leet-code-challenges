/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];
  for (let character of s) {
    if (character === "(" || character === "{" || character === "[")
      stack.unshift(character);
    else if (character === ")" && stack.length > 0 && stack[0] === "(")
      stack.shift();
    else if (character === "}" && stack.length > 0 && stack[0] === "{")
      stack.shift();
    else if (character === "]" && stack.length > 0 && stack[0] === "[")
      stack.shift();
    else return false;
  }
  return stack.length === 0;
};

console.time("performance");
console.log(isValid("{[]}"));
console.timeEnd("performance");
