function MaxValue(shares) {
  // Your code here:
  console.log(shares);
  //  buy ->                    ^
  //  sell ->                         ^
  // Profit                 -1 -1  3  9
  let maxProfit = -Infinity; // shares[1] - shares[0]
  let minValue = shares[0]; // buy
  for (let i = 1; i < shares.length; i++) {
    const sell = shares[i];
    const profit = sell - minValue;
    if (profit > maxProfit) maxProfit = profit;
    if (sell < minValue) minValue = sell;
  }
  return maxProfit;
}
// Complejidad temporal: 0(n)
console.log(MaxValue([4, 3, 2, 5, 11])); //(9)
//console.log(MaxValue([23, 7, 3, 4, 8, 6]))//(5)
// function MaxValue(shares) {
//   // Your code here:
//   console.log(shares);
//   //                           ^
//   //                              ^
//   let maxProfit = -Infinity; // shares[1] - shares[0]
//   for (let i = 0; i < shares.length - 1; i++) {
//     const buy = shares[i];
//     for (let j = i + 1; j < shares.length; j++) {
//       const sell = shares[j];
//       const profit = sell - buy;
//       if (profit > maxProfit) maxProfit = profit;
//     }
//   }
//   return maxProfit;
// }
// Complejidad temporal: 0(n*2)

module.exports = MaxValue
