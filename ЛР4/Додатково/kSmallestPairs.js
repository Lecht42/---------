/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

    const minHeap = [];
    
    for (let j = 0; j < Math.min(nums2.length, k); j++) {
        minHeap.push([nums1[0] + nums2[j], 0, j]);
    }
    
    minHeap.sort((a, b) => a[0] - b[0]);

    while (result.length < k && minHeap.length > 0) {
        const [sum, i, j] = minHeap.shift();
        result.push([nums1[i], nums2[j]]);
        
        if (i + 1 < nums1.length) {
            minHeap.push([nums1[i + 1] + nums2[j], i + 1, j]);
            minHeap.sort((a, b) => a[0] - b[0]);
        }
    }

    return result;
};
