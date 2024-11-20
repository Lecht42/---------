/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
function largestPathValue(colors, edges) {
    const n = colors.length;
    const graph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        inDegree[v]++;
    }

    const topoOrder = [];
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const node = queue.shift();
        topoOrder.push(node);
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    if (topoOrder.length !== n) return -1;

    const dp = Array.from({ length: n }, () => Array(26).fill(0));
    let maxColorValue = 0;

    for (const node of topoOrder) {
        const colorIndex = colors[node].charCodeAt(0) - 'a'.charCodeAt(0);
        dp[node][colorIndex]++;

        maxColorValue = Math.max(maxColorValue, dp[node][colorIndex]);

        for (const neighbor of graph[node]) {
            for (let i = 0; i < 26; i++) {
                dp[neighbor][i] = Math.max(dp[neighbor][i], dp[node][i]);
            }
        }
    }

    return maxColorValue;
}
