/**
 * @param {number[]} nums
 * @return {number}
 */
function numOfWays(nums) {
    const MOD = BigInt(1e9 + 7);
    const factorial = [BigInt(1)];

    for (let i = 1; i <= nums.length; i++) {
        factorial.push((factorial[factorial.length - 1] * BigInt(i)) % MOD);
    }

    function comb(n, k) {
        if (k > n) return BigInt(0);
        const numerator = factorial[n];
        const denominator = (factorial[k] * factorial[n - k]) % MOD;
        return (numerator * modInverse(denominator, MOD)) % MOD;
    }

    function modInverse(a, mod) {
        return modExp(a, mod - BigInt(2), mod);
    }

    function modExp(base, exp, mod) {
        let result = BigInt(1);
        while (exp > 0) {
            if (exp % BigInt(2) === BigInt(1)) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = exp / BigInt(2);
        }
        return result;
    }

    function helper(arr) {
        if (arr.length <= 2) return BigInt(1);

        const root = arr[0];
        const left = arr.filter(num => num < root);
        const right = arr.filter(num => num > root);

        const leftWays = helper(left);
        const rightWays = helper(right);

        const totalWays = comb(left.length + right.length, left.length);

        return (totalWays * leftWays % MOD * rightWays % MOD) % MOD;
    }

    const result = helper(nums);
    return Number((result - BigInt(1) + MOD) % MOD);
}
