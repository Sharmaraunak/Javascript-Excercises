//Sum All Numbers in a Range
function sumAll(arr) {
  arr = arr.sort(compareFunction);
  // console.log(arr);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

function compareFunction(a, b) {
  return a - b;
}

console.log(sumAll([2, 19]));
