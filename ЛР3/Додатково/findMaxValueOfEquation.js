/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
function findMaxValueOfEquation(points, k) {
    let maxVal = -Infinity;
    const deque = [];

    for (let [x, y] of points) {
        while (deque.length && x - deque[0][1] > k) {
            deque.shift();
        }

        if (deque.length) {
            maxVal = Math.max(maxVal, x + y + deque[0][0]);
        }

        const value = y - x;
        while (deque.length && deque[deque.length - 1][0] <= value) {
            deque.pop();
        }
        deque.push([value, x]);
    }

    return maxVal;
}
