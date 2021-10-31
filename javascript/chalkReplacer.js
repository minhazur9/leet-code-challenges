/**
 * 1894. Find the Student that Will Replace the Chalk
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
const chalkReplacer = (chalk, k) => {
  const maxStudents = chalk.length - 1;
  let index = -1;
  while (k >= 0) {
    index++;
    if (index > maxStudents) index = 0;
    k -= chalk[index];
  }
  return index;
};

console.log(chalkReplacer([3, 4, 1, 2], 25));
