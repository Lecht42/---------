function generateData(size, type) {
    let arr = Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
    if (type === "almost_sorted") {
        arr.sort((a, b) => a - b);
        arr[Math.floor(size / 2)] = arr[size - 1] + 1; 
    } else if (type === "reversed") {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

function runSortTests() {
    const results = {
        bubble: [],
        selection: [],
        insertion: [],
        quick: [],
        merge: []
    };

    for (let size = 100; size <= 1000; size += 100) {
        ["random", "almost_sorted", "reversed"].forEach(type => {
            let data = generateData(size, type);

            results.bubble.push({ size, type, ...bubbleSort([...data]) });
            results.selection.push({ size, type, ...selectionSort([...data]) });
            results.insertion.push({ size, type, ...insertionSort([...data]) });
            results.quick.push({ size, type, ...quickSort([...data]) });
            results.merge.push({ size, type, ...mergeSort([...data]) });
        });
    }

    return results;
}
