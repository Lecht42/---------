import binarySearch from "./binarnySearch.js";
import linearSearch from "./linearSearch.js";
import quickSort from "./quickSort.js";
import interpolationSearch from "./interpolationSearch.js";

export default function runSearchTests() {
    const results = {
        linear: [],
        binary: [],
        interpolation: []
    };

    for (let size = 100; size <= 1000; size += 7) {
        const randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
        const target = randomArray[Math.floor(Math.random() * randomArray.length)];

        const linearResult = linearSearch(randomArray, target);
        results.linear.push({ size, comparisons: linearResult.comparisons });

        const sortedArray = quickSort([...randomArray]);

        const binaryResult = binarySearch(sortedArray, target);
        results.binary.push({ size, comparisons: binaryResult.comparisons });

        const interpolationResult = interpolationSearch(sortedArray, target);
        results.interpolation.push({ size, comparisons: interpolationResult.comparisons });
    }

    return results;
}
