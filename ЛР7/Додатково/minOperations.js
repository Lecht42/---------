/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
function minOperations(target, arr) {
    const targetMap = new Map();
    for (let i = 0; i < target.length; i++) {
        targetMap.set(target[i], i);
    }

    const sequence = [];
    for (const num of arr) {
        if (targetMap.has(num)) {
            sequence.push(targetMap.get(num));
        }
    }

    const lis = findLIS(sequence);
    return target.length - lis.length;
}

function findLIS(nums) {
    const sub = [];
    for (const num of nums) {
        if (sub.length === 0 || num > sub[sub.length - 1]) {
            sub.push(num);
        } else {
            let left = 0;
            let right = sub.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (sub[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            sub[left] = num;
        }
    }
    return sub;
}