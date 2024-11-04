function quickSort(arr, low = 0, high = arr.length - 1, comparisons = { count: 0 }, swaps = { count: 0 }, threshold = 20) {
    if (high - low <= threshold) {
        insertionSort(arr, low, high, comparisons, swaps);
        return { sortedArray: arr, comparisons: comparisons.count, swaps: swaps.count };
    }

    if (low < high) {
        const pi = partition(arr, low, high, comparisons, swaps);
        quickSort(arr, low, pi - 1, comparisons, swaps, threshold);
        quickSort(arr, pi + 1, high, comparisons, swaps, threshold);
    }
    return { sortedArray: arr, comparisons: comparisons.count, swaps: swaps.count };
}

function partition(arr, low, high, comparisons, swaps) {
    const mid = Math.floor((low + high) / 2);
    const pivot = medianOfThree(arr, low, mid, high);
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
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

function medianOfThree(arr, low, mid, high) {
    if ((arr[low] - arr[mid]) * (arr[high] - arr[low]) >= 0) {
        [arr[high], arr[low]] = [arr[low], arr[high]];
    } else if ((arr[mid] - arr[low]) * (arr[high] - arr[mid]) >= 0) {
        [arr[high], arr[mid]] = [arr[mid], arr[high]];
    }
    return arr[high];
}

function insertionSort(arr, low, high, comparisons, swaps) {
    for (let i = low + 1; i <= high; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= low && arr[j] > key) {
            comparisons.count++;
            arr[j + 1] = arr[j];
            swaps.count++;
            j--;
        }
        arr[j + 1] = key;
    }
}
