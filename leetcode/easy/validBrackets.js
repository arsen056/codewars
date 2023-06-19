/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
    const OPEN_BRACKETS = ['(', '{', '[']
    const BRACKET_PAIRS = {
        [')']: '(',
        ['}']: '{',
        [']']: '['
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]

        if (OPEN_BRACKETS.includes(currentBracket)) {
            stack.push(currentBracket)
        } else {
            const topElement = stack[stack.length - 1]

            if (BRACKET_PAIRS[currentBracket] === topElement) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
};