/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[target - nums[i]] !== undefined) {
            return [result[target - nums[i]], i];
        } else {
            result[nums[i]] = i;
        }
    }

};
