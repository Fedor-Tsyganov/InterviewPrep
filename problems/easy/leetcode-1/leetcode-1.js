//TwoSum: https://leetcode.com/problems/two-sum/description/

/*
Problem Statement:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = {};
    for (const i in nums) {
        let val = nums[i];
        let remainder = target - val;
        if (map[remainder] !== undefined) {
            return [map[remainder], i];
        } else {
            map[val] = i;
        }
    }
};