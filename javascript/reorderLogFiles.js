/**
 * 937. Reorder Data in Log Files
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = (logs) => {
  const letterLogs = logs.filter((log) => log.match(/\s[a-z]/));
  const digitLogs = logs.filter((log) => log.match(/\s\d/));
  const sortedLetterLogs = letterLogs.sort((a, b) => {
    if (a.substr(a.indexOf(" ") + 1) > b.substr(b.indexOf(" ") + 1)) return 1;
    if (a.substr(a.indexOf(" ") + 1) < b.substr(b.indexOf(" ") + 1)) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return sortedLetterLogs.concat(digitLogs);
};

console.time("performance");
console.log(
  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo"
  ])
);
console.timeEnd("performance");
