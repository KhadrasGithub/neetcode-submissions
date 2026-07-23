class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let checkNums = new Set<number>();
       for (const num of nums){
       if (checkNums.has(num)) {
        return true;
       } checkNums.add(num);
       } return false;
    }
}

/*
create an empty Map then loop through to check if the value it is checking is present
if so, return false
*/