class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagram = new Map<string, string[]>();
        for (const st of strs) {
           const sortedKey = st.split('').sort().join('');
            if (anagram.has(sortedKey)){
                const list = anagram.get(sortedKey)!;
                list.push(st);
            } else {
                anagram.set(sortedKey, [st])
            }
                }
            return Array.from(anagram.values());    
    }
}


/*
takes 1 string, returns multiple strings
Map 
*/