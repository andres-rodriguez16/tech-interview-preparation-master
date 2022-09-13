
// needle: redux
// haystack: react - redux
// output: 6

function FindNeedle(haystack, needle) {
  // Your code here:
  for (let i = 0; i < haystack.length; i++) {
    let count = 0;
    let postNeedle = 0;
    if (haystack[i] === needle[0]) {
      count += 1;
      postNeedle += 1;
      while (postNeedle < needle.length) {        
        if (haystack[i + postNeedle] === needle[postNeedle]) {
          count += 1;
        } else {
          break;
        }
        postNeedle += 1;
      }
    }
    if (count === needle.length) {
      return  i;
    }
  }
  return -1;
}

// function FindNeedle(haystack, needle) {
//   console.log(haystack);
//   console.log(needle);
//   for (let i = 0; i < haystack.length - needle.length + 1; i++) {
//     const sliced = haystack.slice(i, i + needle.length);
//     console.log(sliced);
//     if (needle === sliced) return i;
//   }
//   return -1;
// }
// Complejidad temporal: O(n*m)
// "slice" tiene complejidad O(n); y lo utilizamos dentro de un bucle for.
// console.log(FindNeedle("react-redux", "redux")); //(6)
//console.log(FindNeedle('aaapink', 'pinky'))//(-1)
//console.log(FindNeedle('rereredux', 'reredux'))//(2)
// function FindNeedle(haystack, needle) {
//   for (let i = 0; i < haystack.length - needle.length + 1; i++) {
//     for (let j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) break;
//       if (j === needle.length - 1) return i;
//     }
//   }
//   return -1;
// }
// Complejidad temporal: O(n*m)
// ---> siendo "n" la longitud de "haystack" y "m" la longitud de "needle"
console.log(FindNeedle("camaleo", "papa"));

module.exports = FindNeedle


