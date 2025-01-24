/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (str) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] < map[str[i + 1]]) {
            result -= map[str[i]]
        } else {
            result += map[str[i]]
        }
    }
    return result
};