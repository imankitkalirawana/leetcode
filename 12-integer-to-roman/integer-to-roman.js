/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    let result = ""
    let values = Object.keys(map).reverse()
    for (let value of values) {
        while (num >= value) {
            result += map[value]
            num -= value
        }
    }
    return result
}