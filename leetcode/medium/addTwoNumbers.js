/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const str1 = reverseStr(listToStr(l1))
    const str2 = reverseStr(listToStr(l2))
    const res = add(str1, str2)


    return strToList(String(res))
};

function listToStr(list) {
    let tmp = list;
    let res = ''

    while (tmp) {
        res += tmp.val
        tmp = tmp.next;
    }
    return res
}

function strToList(str) {
    const res = {}
    let tmp = res
    for (let i = str.length - 1; i !== -1; i--) {
        tmp.val = +str[i]
        tmp.next = {}
        if (i === 0) tmp.next = null
        tmp = tmp.next
    }
    return res
}

function reverseStr(str) {
    return str.split('').reverse().join('')
}

function res(a, b, result, carry, base) {
    if (a.length == 0 && b.length == 0 && !carry)
        return result;

    var left = parseInt(a.pop() || '0', 10);
    var right = parseInt(b.pop() || '0', 10);

    var l = left + right + (carry || 0);

    return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}

function add(a, b) {
    return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
}