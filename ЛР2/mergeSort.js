function mergeSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            comparisons++;
            if (left[i] < right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
                swaps++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    function mergeSortRecursive(array) {
        if (array.length <= 1) return array;
        let mid = Math.floor(array.length / 2);
        let left = mergeSortRecursive(array.slice(0, mid));
        let right = mergeSortRecursive(array.slice(mid));
        return merge(left, right);
    }

    mergeSortRecursive(arr);
    return { comparisons, swaps };
}
