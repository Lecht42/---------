/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}
