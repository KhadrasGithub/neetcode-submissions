class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const totalNumbers = new Map<number, number>();

        for (let i = 0; i < nums.length; i++){
            const secondNumber = target - nums[i];
           if (totalNumbers.has(secondNumber)) {
            return [totalNumbers.get(secondNumber), i]
           }
           totalNumbers.set(nums[i], i);
        } 
        return[];
    }
}


/*
create an empty Map - contains number and index
for each num, minus num from target then do .has this value
if so then return indices of both values

*/