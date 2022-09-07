
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

console.log(FindNeedle("camaleo", "papa"));

module.exports = FindNeedle


