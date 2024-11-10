/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.stream = nums.slice().sort((a, b) => a - b);
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const index = this.getIndex(val);
    this.stream.splice(index, 0, val); 
    return this.stream[this.stream.length - this.k]; 
};

/**
 * @param {number} val
 * @return {number} 
 */
KthLargest.prototype.getIndex = function(val) {
    let left = 0;
    let right = this.stream.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (this.stream[mid] === val) return mid;
        if (this.stream[mid] < val) left = mid + 1; 
        else right = mid - 1;                       
    }
    
    return left;
};