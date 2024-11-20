/**
 * @param {string[]} words
 * @return {string[]}
 */
function findAllConcatenatedWordsInADict(words) {
    function canForm(word, wordSet) {
        if (wordSet.size === 0) return false;
        
        const dp = new Array(word.length + 1).fill(false);
        dp[0] = true;
        
        for (let i = 1; i <= word.length; i++) {
            for (let j = 0; j < i; j++) {
                if (!dp[j]) continue;
                const substring = word.substring(j, i);
                if (wordSet.has(substring)) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[word.length];
    }

    words.sort((a, b) => a.length - b.length);
    
    const wordSet = new Set();
    const result = [];
    
    for (const word of words) {
        if (word.length === 0) continue; 
        
        if (canForm(word, wordSet)) {
            result.push(word);
        }
        wordSet.add(word);
    }
    
    return result;
};