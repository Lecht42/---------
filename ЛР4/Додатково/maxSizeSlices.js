/**
 * @param {number[]} slices
 * @return {number}
 */
function maxSizeSlices(slices) {
    const n = slices.length / 3;

    function maxSum(slices, start, end, n) {
        const dp = Array.from({ length: end - start + 2 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= end - start + 1; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    (i - 2 >= 0 ? dp[i - 2][j - 1] + slices[start + i - 1] : slices[start + i - 1])
                );
            }
        }
        
        return dp[end - start + 1][n];
    }

    return Math.max(
        maxSum(slices, 0, slices.length - 2, n), 
        maxSum(slices, 1, slices.length - 1, n)
    );
}
