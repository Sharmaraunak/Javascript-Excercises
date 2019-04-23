function convertHTML(str) {
  let entities = {
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;"
  };

  // &colon;&rpar;
  return str
    .split("")
    .map(entity => entities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
