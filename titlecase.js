function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.replace(word[0], word[0].toLocaleUpperCase()))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
/* console.log(
  "I'm a little tea pot"
    .toLowerCase()
    .split(" ")
    .map(word => word.replace(word[0], word[0].toLocaleUpperCase()))
); */
