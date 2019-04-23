function uniteUnique(arr) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    let argumentsArray = arguments[i];
    for (let j = 0; j < argumentsArray.length; j++) {
      let index = argumentsArray[j];
      if (finalArray.indexOf(index) < 0) {
        finalArray.push(index);
      }
    }
  }

  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
