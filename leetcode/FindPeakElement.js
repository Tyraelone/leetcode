/**
 * Created by duanz on 2016/2/15.
 * A peak element is an element that is greater than its neighbors.

 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

 You may imagine that num[-1] = num[n] = -∞.

 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length===1){
        return 0;
    }
    for(var i=0;i<nums.length;i++){
        if(i+2<nums.length){
            if(nums[i+1]>nums[i]&&nums[i+1]>nums[i+2]){
                return i+1;
            }
        }
        if(i+1===nums.length){
            if(i-1>=0&&nums[i]>nums[i-1]){
                return i;
            }
        }
        if(i===0&&nums.length>1){
            if(nums[0]>nums[1]){
                return 0;
            }
        }

    }

};