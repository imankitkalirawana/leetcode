class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int closestSum = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < n; i++) {
            int curr = nums[i];
            int st = i + 1, end = n - 1;
            while (st < end) {
                int currSum = curr + nums[st] + nums[end];

                if (abs(closestSum - target) > abs(currSum - target)) {
                    closestSum = currSum;
                }

                if (currSum < target) {
                    st++;
                } else if (currSum > target) {
                    end--;
                } else {
                    return currSum;
                }
            }
        }
        return closestSum;
    }
};