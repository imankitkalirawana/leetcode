/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true

};