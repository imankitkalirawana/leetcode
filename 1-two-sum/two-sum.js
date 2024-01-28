/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [1, 5, 9]
// target = 10
// [0, 2]

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    
};