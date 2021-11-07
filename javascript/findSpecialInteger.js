/**
 * 1287. Element Appearing More Than 25% In Sorted Array
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
  const size = arr.length;
  let counter = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i - 1] != undefined && arr[i - 1] !== arr[i]) counter = 1;
    else counter++;
    if (counter > size / 4) return arr[i];
  }
};

console.time("performance");
console.log(
  findSpecialInteger([
    0, 0, 2, 2, 2, 4, 4, 4, 6, 6, 10, 10, 10, 10, 10, 12, 14, 16, 16
  ])
);
console.timeEnd("performance");
