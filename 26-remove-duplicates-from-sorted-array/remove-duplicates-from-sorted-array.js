/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let w = 1;

    for (let r = 1; r < nums.length; r++) {
        if (nums[r] !== nums[r - 1]) {
            nums[w] = nums[r];
            w++;
        }
    }

    return w;
};