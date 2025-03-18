/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
    const repQueue = [];
    const demQueue = [];
    
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            repQueue.push(i);
        }
        else {
            demQueue.push(i);
        }
    }
    
    while (repQueue.length > 0 && demQueue.length > 0) {
        const repIndex = repQueue.shift();
        const demIndex = demQueue.shift();
        if (repIndex < demIndex) {
            repQueue.push(repIndex + n);
        }
        else {
            demQueue.push(demIndex + n);
        }
    }
    
    return (demQueue.length === 0) ? "Radiant" : "Dire";    
};