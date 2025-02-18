/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let res = [];
    let line = [];
    let lineLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (lineLength + line.length + words[i].length > maxWidth) {
            for (let j = 0; j < maxWidth - lineLength; j++) {
                line[j % (line.length - 1 || 1)] += ' ';
            }
            res.push(line.join(''));
            line = [];
            lineLength = 0;
        }
        line.push(words[i]);
        lineLength += words[i].length;
    }
    res.push(line.join(' ').padEnd(maxWidth, ' '));
    return res;

};