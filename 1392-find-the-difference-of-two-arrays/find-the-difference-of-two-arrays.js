/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const keys1 = new Set(nums1);
    const keys2 = new Set(nums2);
    nums1 = [...keys1];
    nums2 = [...keys2]
    
    for (let num of nums1) {
        if (keys2.has(num)) {
            keys2.delete(num);
        }
    }
    for (let num of nums2) {
        if (keys1.has(num)) {
            keys1.delete(num);
        }
    }    
    return [[...keys1], [...keys2]];   
};