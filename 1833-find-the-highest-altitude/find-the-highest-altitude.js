/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const n = gain.length;
    let maxAlt = 0;
    let lastAlt = 0;
    
    for (let alt of gain) {
        lastAlt += alt;
        maxAlt = Math.max(maxAlt, lastAlt);
    }
    return maxAlt;    
};