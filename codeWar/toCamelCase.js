function toCamelCase(str) {
  let results = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i-1] === "_") {
      continue;
    }
    if (str[i - 1] === "-" || str[i-1] === "_") {
      results = results + str[i].toUpperCase();;
      continue;
    }
    results = results + str[i]
  }
  return results;
}

console.log(toCamelCase("the_stealth-warrior"));
console.log(toCamelCase("A-B-C"));