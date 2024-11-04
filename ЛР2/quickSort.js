function quickSort(arr, low = 0, high = arr.length - 1, comparisons = { count: 0 }, swaps = { count: 0 }) {
    if (low < high) {
        const pi = partition(arr, low, high, comparisons, swaps);
        quickSort(arr, low, pi - 1, comparisons, swaps);
        quickSort(arr, pi + 1, high, comparisons, swaps);
    }
    return { sortedArray: arr, comparisons: comparisons.count, swaps: swaps.count };
}

function partition(arr, low, high, comparisons, swaps) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        comparisons.count++;
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            swaps.count++;
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    swaps.count++;
    return i + 1;
}
