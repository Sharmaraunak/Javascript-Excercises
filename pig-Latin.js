function translatePigLatin(str) {
  if (str[0].match(/[aeiouAEIOU]/)) {
    return str + "way";
  } else {
    if (!str[1].match(/[aeiouAEIOU]/)) {
      return (
        str
          .split("")
          .splice(2, str.length)
          .join("") +
        str[0] +
        str[1] +
        "ay"
      );
    }
    return (
      str
        .split("")
        .splice(1, str.length)
        .join("") +
      str[0] +
      "ay"
    );
  }
}

console.log(translatePigLatin("banana"));
/* let str = "Raunak";

console.log(str.split("").splice(1, str.length)); */
