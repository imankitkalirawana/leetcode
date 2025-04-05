/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let check = k => {
        let hours = 0;
        for (const bananas of piles) {
            hours += Math.ceil(bananas / k);
        }
        return hours <= h;
    }

    let l = 1;
    let r = Math.max(...piles);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (check(mid)) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l;
};;