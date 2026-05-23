class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketTypes = new Map();
        bracketTypes.set(")", "(");
        bracketTypes.set("]", "[");
        bracketTypes.set("}", "{");

        const stack = new Array();

        for (let i = 0; i < s.length; i++) {
            let bracket = s[i];
            
            if (!bracketTypes.has(bracket)) stack.push(bracket);
            else if (bracketTypes.get(bracket) !== stack.pop()) return false;
        }
        if (stack.length === 0) return true;
        else return false;
    }
}
