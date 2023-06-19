/*
* Given a sorted array of distinct integers and a target value, return the index if the target is found.
* If not, return the index where it would be if it were inserted in order.
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        const currentEl = nums[i];
        const nextEl = nums[i + 1];

        if (currentEl === target || currentEl > target) {
            return i
        } else if (target < nextEl) {
            return i + 1
        }
    }

    return nums.length
};