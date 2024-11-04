export default function linearSearch(arr, target) {
    let comparisons = 0;
    for (let i = 0; i < arr.length; i++) {
        comparisons++;
        if (arr[i] === target) {
            return { index: i, comparisons };
        }
    }
    return { index: -1, comparisons };  
}
