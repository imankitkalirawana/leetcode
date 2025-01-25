function lexicographicallySmallestArray(nums, limit) {
    const n = nums.length;

    const sortedIndices = Array.from({ length: n }, (_, index) => index);
    sortedIndices.sort((a, b) => nums[a] - nums[b]);

    const result = Array(n).fill(0);

    let groupStart = 0;
    while (groupStart < n) {
        let groupEnd = groupStart + 1;

        while (groupEnd < n && nums[sortedIndices[groupEnd]] - nums[sortedIndices[groupEnd - 1]] <= limit) {
            groupEnd++;
        }

        const groupIndices = sortedIndices
            .slice(groupStart, groupEnd)
            .sort((a, b) => a - b);

        const sortedValues = groupIndices
            .map(index => nums[index])
            .sort((a, b) => a - b);

        for (let i = 0; i < groupIndices.length; i++) {
            result[groupIndices[i]] = sortedValues[i];
        }

        groupStart = groupEnd;
    }

    return result;
}