class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const words: Map<string, string[]> = new Map();

        for (let string of strs) {
            const sortedString = string.split('').sort().join('');

            words.set(
            sortedString,
            words.get(sortedString) === undefined
                ? [string]
                : [string, ...words.get(sortedString)],
            );
        }
        return Array.from(words.values());
    }
}
