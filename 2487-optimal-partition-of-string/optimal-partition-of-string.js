/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let result = 1;
    let seen = new Set();
    seen.add(s[0]);

    for (let i = 1; i < s.length; i++) {
        if (seen.has(s[i])) {
            result++;
            seen.clear();
            seen.add(s[i]);
        } else {
            seen.add(s[i]);
        }
    }
    return result;
};