/**
 * @param {string} s
 * @return {number}
 */
function countAnagrams(s) {
    const MOD = BigInt(1000000007);
    
    function powMod(base, exponent, mod) {
        let result = BigInt(1);
        base = BigInt(base) % mod;
        exponent = BigInt(exponent);
        while (exponent > 0) {
            if (exponent % BigInt(2) === BigInt(1)) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exponent = exponent / BigInt(2);
        }
        return result;
    }

    const words = s.split(' ');
    let maxLen = 0;
    for (const word of words) {
        if (word.length > maxLen) {
            maxLen = word.length;
        }
    }

    const factorial = new Array(maxLen + 1);
    factorial[0] = BigInt(1);
    for (let i = 1; i <= maxLen; i++) {
        factorial[i] = (factorial[i - 1] * BigInt(i)) % MOD;
    }

    const invFactorial = new Array(maxLen + 1);
    invFactorial[maxLen] = powMod(factorial[maxLen], MOD - BigInt(2), MOD);
    for (let i = maxLen; i >= 1; i--) {
        invFactorial[i - 1] = (invFactorial[i] * BigInt(i)) % MOD;
    }

    let total = BigInt(1);
    for (const word of words) {
        const freq = {};
        for (const char of word) {
            freq[char] = (freq[char] || 0) + 1;
        }
        let perms = factorial[word.length];
        for (const count of Object.values(freq)) {
            perms = (perms * invFactorial[count]) % MOD;
        }
        total = (total * perms) % MOD;
    }
    return Number(total);
};
