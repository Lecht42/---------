/**
 * @param {number[]} nums
 * @return {number}
 */
function findValidSplit(nums) {
    const n = nums.length;
    const MAX = Math.max(...nums) || 2;
    const spf = new Array(MAX + 1).fill(0);
    for(let i = 0; i <= MAX; i++) {
        spf[i] = i;
    }
    for(let i = 2; i * i <= MAX; i++) {
        if(spf[i] === i) { // i is prime
            for(let j = i * i; j <= MAX; j += i) {
                if(spf[j] === j) {
                    spf[j] = i;
                }
            }
        }
    }
    
    function getUniquePrimes(x) {
        const primes = new Set();
        while(x > 1) {
            primes.add(spf[x]);
            x = Math.floor(x / spf[x]);
        }
        return primes;
    }
    
    const primeLastIndex = new Map();
    for(let i = 0; i < n; i++) {
        const num = nums[i];
        if(num === 1) continue; // 1 has no prime factors
        const primes = getUniquePrimes(num);
        for(const p of primes) {
            primeLastIndex.set(p, i);
        }
    }
    
    let split = -1;
    let maxLast = -1;
    for(let i = 0; i < n -1; i++) {
        const num = nums[i];
        if(num === 1) continue;
        const primes = getUniquePrimes(num);
        for(const p of primes) {
            if(primeLastIndex.get(p) > maxLast) {
                maxLast = primeLastIndex.get(p);
            }
        }
        if(i === maxLast) {
            split = i;
            return split;
        }
    }
    return split;
};
