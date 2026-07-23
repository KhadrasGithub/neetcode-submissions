class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (const num of nums){
            const currentCount = map.get(num) || 0;
            map.set(num, currentCount + 1);
        }
        const entries = Array.from(map.entries());
        const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
        const topEntries = sortedEntries.slice(0,k);
        const mappedEntries = topEntries.map((entry) => entry[0])
        return mappedEntries;

    }
}
