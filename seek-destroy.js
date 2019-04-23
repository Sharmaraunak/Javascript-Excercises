function destroyer(arr) {
  // Remove all the values
  for (let i = 1; i < arguments.length; i++) {
    //console.log(arguments[i]);
    arr = arrayRemove(arr, arguments[i]);
    //console.log(arr);
  }

  return arr;
}
function arrayRemove(arr, value) {
  arr = arr.filter(function(ele) {
    return ele != value;
  });
  //console.log("hello" + arr);
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
