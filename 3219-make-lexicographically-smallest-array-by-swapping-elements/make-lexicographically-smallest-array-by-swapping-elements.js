function lexicographicallySmallestArray(nums, limit) {
  const n = nums.length;

  // Create an array of indices and sort them by their corresponding values in nums
  const sortedIndices = Array.from({ length: n }, (_, index) => index);
  sortedIndices.sort((a, b) => nums[a] - nums[b]);

  // Initialize the result array
  const result = Array(n).fill(0);

  // Process each group of indices with values within the "limit" difference
  let groupStart = 0;
  while (groupStart < n) {
    let groupEnd = groupStart + 1;

    // Expand the group while the difference between consecutive values is <= limit
    while (groupEnd < n && nums[sortedIndices[groupEnd]] - nums[sortedIndices[groupEnd - 1]] <= limit) {
      groupEnd++;
    }

    // Extract and sort the current group of indices
    const groupIndices = sortedIndices
      .slice(groupStart, groupEnd)
      .sort((a, b) => a - b);

    // Sort the values of the group and place them into the result array
    const sortedValues = groupIndices
      .map(index => nums[index])
      .sort((a, b) => a - b);

    // Write the sorted values back to the result array
    for (let i = 0; i < groupIndices.length; i++) {
      result[groupIndices[i]] = sortedValues[i];
    }

    // Move to the next group
    groupStart = groupEnd;
  }

  return result;
}