/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = partition(arr, left, right);

    if (pivotIndex === k) {
        return arr[pivotIndex];
    } else if (pivotIndex < k) {
        return quickSelect(arr, pivotIndex + 1, right, k);
    } else {
        return quickSelect(arr, left, pivotIndex - 1, k);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}
