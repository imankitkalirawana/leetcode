/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ")
    let rev = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "") {
            continue;
        }
        rev.push(arr[i])
    }
    return rev.join(" ").trim()

};