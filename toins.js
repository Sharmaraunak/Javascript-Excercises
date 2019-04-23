function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  console.log(arr.sort(compareNumbers));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    } else if (arr == []) {
      return 0;
    }
  }
  return arr.length;
}

function compareNumbers(a, b) {
  return a - b;
}
console.log(getIndexToIns([2, 5, 10], 15));
