/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0;
    let j = 0;
    let result = ""

    while (i < word1.length || j < word2.length) {
        if (word1[i] !== undefined) {

            result += word1[i];
        }
        if (word2[i] !== undefined) {

            result += word2[j];
        }
        i++;
        j++;
    }

    return result
};