function chunkArrayInGroups(arr, size) {
  // Break it up.
  let i = 0;
  let largearray = [];
  while (i < arr.length) {
    largearray.push(arr.slice(i, i + size));
    i += size;
  }

  return largearray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
