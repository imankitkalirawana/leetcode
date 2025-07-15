/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let printp = function (nums, arr, isValid, res) {
    if (arr.length == nums.length) {
        res.push([...arr]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && !isValid[i - 1]) continue;
        if (isValid[i] == false) {
            arr.push(nums[i])
            isValid[i] = true;
            printp(nums, arr, isValid, res);
            arr.pop(nums[i]);
            isValid[i] = false;
        }
    }
}
var permuteUnique = function (nums) {
    nums=nums.sort((a,b)=>a-b)
    let arr = [];
    let res = []
    let isValid = new Array(nums.length).fill(false);
    printp(nums, arr, isValid, res)
    return res;
};