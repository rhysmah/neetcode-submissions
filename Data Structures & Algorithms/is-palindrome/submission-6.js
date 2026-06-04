class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNum = char => /^[a-zA-Z0-9]$/i.test(char);
        
        let l = 0;
        let r = s.length - 1;

        while (l <= r) {
            if (!isAlphaNum(s[l]) && !isAlphaNum(s[r])) {
                l++;
                r--;
                continue;
            }
            if (!isAlphaNum(s[l])) { l++; continue }
            if (!isAlphaNum(s[r])) { r--; continue }

            let lowLeft = s[l].toLowerCase();
            let lowRight = s[r].toLowerCase();
            if (lowLeft !== lowRight) return false;

            l++;
            r--;
        }
        return true;
    }
}
