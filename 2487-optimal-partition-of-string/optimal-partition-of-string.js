/**
 * @param {string} s
 * @return {number}
 */

var partitionString = function (s) {
    let result = 1;
    let window = s[0];

    for (let i = 1; i < s.length; i++) {
        if (window.includes(s[i])) {
            result++;
            window = s[i];
        } else {
            window += s[i];
        }
    }
    return result
};