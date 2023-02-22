//Best time to buy sell Stocks

//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//Brute fornce solution:

const maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let buy = prices[i];
    //go through the array and decide should i buy;
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      //should is sell
      if (sell > buy) {
        //Record the profit and see if the new profit is more than my meorised profit
        profit = Math.max(profit, prices[j] - prices[i]);
      }
    }
  }
  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//Optimised Solution:
function optimisedMaxProfit(prices) {
  //keep track of our original price
  let [buyPrice] = prices;
  let profit = 0;
  //go through arr and see if there is profit
  for (let i = 0; i < prices.length - 1; i++) {
    //if there is no profit continue;
    let tempProfit = prices[i + 1] - prices[i];
    //if there is profit
    if (tempProfit > 0) {
      //check if my purchase price is less than my old one
      if (prices[i] < buyPrice) {
        //replace my starting price
        buyPrice = prices[i];
      }
      //track our profit
      profit = Math.max(prices[i + 1] - buyPrice, profit);
    }
  }
  return profit;
}
