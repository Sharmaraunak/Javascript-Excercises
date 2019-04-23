function pairElement(str) {
  return str.split("").map(pair => {
    if (pair === "C") {
      return [pair, "G"];
    } else if (pair === "G") {
      return [pair, "C"];
    } else if (pair === "A") {
      return [pair, "T"];
    } else {
      return [pair, "A"];
    }
  });
}

console.log(pairElement("ATCGA"));
