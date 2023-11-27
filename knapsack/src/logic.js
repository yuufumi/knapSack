/*
  item structure = { name: 'String', weight: integer, value: integer };
*/
function knapsackSolve(items, capacity) {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { value, weight } = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let selectedItems = [];
  let i = n;
  let j = capacity;
  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {

      selectedItems.push(true);
      j -= items[i - 1].weight;
    } else {
      selectedItems.push(false);
    }
    i--;
  }
  return {
    chosen: selectedItems.reverse(),
    valueOptim: dp[n][capacity]
  };
}









  /*
  
  return { chosen: chosen, valueOptim: V }
}*/

export default knapsackSolve;
