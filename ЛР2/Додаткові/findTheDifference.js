/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
    let result = 0;

    for (let char of s) {
        result ^= char.charCodeAt(0);
    }


    for (let char of t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
}
