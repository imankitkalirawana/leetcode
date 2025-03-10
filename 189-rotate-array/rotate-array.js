/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  k = k % n;
  const result = [...nums];
  
  for (let i = 0; i < n; i++) {
    if (i < k) {
      nums[i] = result[n - k + i];
    } else {
      nums[i] = result[i - k];
    }
  }
};
