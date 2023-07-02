//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

/** @typedef {{ n: string }} north*/
/** @typedef {{ s: string }} south*/
/** @typedef {{ w: string }} west*/
/** @typedef {{ e: string }} east*/
/** @typedef {(north, south, west, east) } Directions */

/**
 * @param {Directions[]} walk - directions
 * @return {boolean}
 */

function isValidWalk(walk) {

    if (walk.length !== 10) return false

    const OPPOSITE_DIRECTIONS = {
        'n': 's',
        's': 'n',
        'w': 'e',
        'e': 'w'
    }

    const countsDir = walk.reduce((a,b) => {
        a[b] = (a[b] || 0) + 1;
        return a
    }, {})

    for (let [key, value] of Object.entries(countsDir)) {
        if (value !== countsDir[OPPOSITE_DIRECTIONS[key]]) {
            return false
        }
    }

    return true
}