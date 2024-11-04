export default function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let comparisons = 0;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        comparisons++;
        if (low === high) {
            if (arr[low] === target) {
                return { index: low, comparisons };
            }
            break;
        }

        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
        
        if (arr[pos] === target) {
            return { index: pos, comparisons };
        }
        
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return { index: -1, comparisons };  
}
