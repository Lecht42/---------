function bubbleSort(arr) {
    let comparisons = 0;
    let swaps = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        for (let i = left; i < right; i++) {
            comparisons++;
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swaps++;
            }
        }
        right--;
        for (let j = right; j > left; j--) {
            comparisons++;
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                swaps++;
            }
        }
        left++;
    }

    return { comparisons, swaps };
}
