function HasBalancedBrackets(string) {
  // Your code here:
  if (string.length % 2 === 1) return false;
  //
  const openBrackets = [];
  const validBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  //
  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (validBrackets[bracket]) {
      // Existe la propiedad?
      openBrackets.push(bracket);
    } else {
      const lastOpen = openBrackets[openBrackets.length - 1];
      if (validBrackets[lastOpen] === bracket) {
        // Traigo el valor
        openBrackets.pop();
      } else return false;
    }
  }
  return openBrackets.length ? false : true;
}
// Complejidad temporal = O(n)
console.log(HasBalancedBrackets("{[]()}")); //(true)
//console.log(HasBalancedBrackets('{[(])}'))//(false)
//console.log(HasBalancedBrackets('{[('))//(false)
//console.log(HasBalancedBrackets('{[([{()[]{}}])]}'))//(true)
//console.log(HasBalancedBrackets('{[]}}'))//(false)
//                                   ^
// function HasBalancedBrackets(string) {
//   // Your code here:
//   if (string.length % 2 === 1) return false;
//   //
//   const validOpeningBrackets = ["(", "[", "{"];
//   const validClosingBrackets = [")", "]", "}"];
//   const openBrackets = [];
//   //
//   for (let i = 0; i < string.length; i++) {
//     const bracket = string[i];
//     console.log(bracket);
//     if (validOpeningBrackets.includes(bracket)) {
//       openBrackets.push(bracket);
//     }
//     if (validClosingBrackets.includes(bracket)) {
//       const lastOpen = openBrackets[openBrackets.length - 1];
//       const index = validClosingBrackets.indexOf(bracket);
//       const brother = validOpeningBrackets[index];
//       if (lastOpen === brother) {
//         openBrackets.pop();
//       } else return false;
//     }
//     console.log(openBrackets);
//   }
//   return openBrackets.length ? false : true;
//   // if(openBrackets.length) return false
//   // else return true
// }
// Complejidad temporal = O(n)
//}

module.exports = HasBalancedBrackets
