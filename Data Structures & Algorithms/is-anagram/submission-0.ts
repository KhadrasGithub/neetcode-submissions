class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const anagram = new Map<string, number>();
        if (s.length !== t.length){
            return false;
        }
        for (const element of s){
            if (anagram.has(element)){
                const valueElement = anagram.get(element);
                anagram.set(element, valueElement + 1);
    
            } else {
                anagram.set(element, 1);
            }
        }
        for (const element of t){
            const count = anagram.get(element);
            if (!count || count === 0) {
                return false;
            }
            anagram.set(element, count - 1);
        }
        return true;
    }
}

/*
create map that contains the current string characters?
then for loop each character and map.has that character
but then what if it checks 'r' and that's present, then another 'r' does map check yes if it's there
regardless of how many 'r's or if there's another 'r' and it's already been checked, it's false?
*/

