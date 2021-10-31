/**
 * 830. Positions of Large Groups
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = (s) => {
  const solution = [];
  let start = 0;
  let end = 0;
  let charGroup = s[0];
  for (let i = 0; i < s.length; i++) {
    if (charGroup !== s[i]) {
      end = i - 1;
      if (end - start >= 2) solution.push([start, end]);
      start = i;
      charGroup = s[i];
    }
  }
  end = s.length - 1;
  if (end - start >= 2) solution.push([start, end]);
  return solution;
};

largeGroupPositions("abcdddeeeeaabbbcd");
