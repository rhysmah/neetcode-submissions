class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = new Map();
        const asciiOffset = 97;  // ASCII 'a'    

        for (const word of strs) {
            const alphabet = new Array(26).fill(0);

            for (const letter of word) {
                let letterAsNum = letter.charCodeAt(0) - asciiOffset;
                alphabet[letterAsNum] += 1;
            }

            let key = alphabet.join(",");
            if (seen.has(key)) seen.get(key).push(word);
            else seen.set(key, [word]);

        }
        return Array.from(seen.values());
    }
}