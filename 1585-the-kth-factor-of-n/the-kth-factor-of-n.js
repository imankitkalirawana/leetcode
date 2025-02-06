/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let result = [1]
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            result.push(i)
        } else {
            continue
        }
    }

    if (result.length < k) return -1

    return result[k - 1]
};