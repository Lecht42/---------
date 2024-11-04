export default function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let comparisons = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        comparisons++;
        if (arr[mid] === target) {
            return { index: mid, comparisons };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return { index: -1, comparisons };  
}
