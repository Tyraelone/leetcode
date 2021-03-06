/**
 * Created by duanz on 2016/2/14.
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 You are given a target value to search. If found in the array return its index, otherwise return -1.

 You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(var i=0;i<nums.length;i++){


        if(nums[i]===target){
            return i;
        }
        if(nums[nums.length-1-i]===target){
            return nums.length-i-1;
        }


    }
    return -1;
};

console.log(search([1,3,5],3));
