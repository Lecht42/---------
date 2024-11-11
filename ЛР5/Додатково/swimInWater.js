/**
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
    const n = grid.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const minHeap = [[grid[0][0], 0, 0]];
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    visited[0][0] = true;
    let maxElevation = 0;

    while (minHeap.length > 0) {
        const [elevation, x, y] = minHeap.shift();
        maxElevation = Math.max(maxElevation, elevation);

        if (x === n - 1 && y === n - 1) return maxElevation;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                minHeap.push([grid[nx][ny], nx, ny]);
                minHeap.sort((a, b) => a[0] - b[0]); 
            }
        }
    }
    return -1; 
}
