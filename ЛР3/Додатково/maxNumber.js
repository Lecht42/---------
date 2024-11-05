/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
function maxNumber(nums1, nums2, k) {
    function maxArray(arr, length) {
        let drop = arr.length - length;
        const stack = [];
        for (let num of arr) {
            while (drop && stack.length && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        return stack.slice(0, length);
    }

    function merge(arr1, arr2) {
        const merged = [];
        while (arr1.length + arr2.length > 0) {
            if (arr1 > arr2) {
                merged.push(arr1.shift());
            } else {
                merged.push(arr2.shift());
            }
        }
        return merged;
    }

    let best = [];
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i));
        if (candidate > best) {
            best = candidate;
        }
    }

    return best.length ? best : [];
}

