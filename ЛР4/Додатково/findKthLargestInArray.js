/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const minHeap = [];

    for (let num of nums) {
        if (minHeap.length < k) {
            minHeap.push(num);
            minHeap.sort((a, b) => a - b);
        } else if (num > minHeap[1]) {
            minHeap.shift();
            minHeap.push(num);
            minHeap.sort((a, b) => a - b);
        }
    }

    return minHeap[0];
}
