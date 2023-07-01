/**
 * @param {number} h - Height
 * @param {number} bounce
 * @param {number} window - window height above ground
 * @return {number} - number of times the ball is shown
 */
//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {

    if (h <= window || bounce >= 1 || bounce < 0) return -1

    let countShows = 0;

    while(h > window) {
        const nextHeight = h * bounce

        if (nextHeight > window) {
            countShows += 2
        } else {
            countShows++
        }

        h = nextHeight
    }

    return countShows
}

// Tests

// describe("Sample tests", () => {
//     it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
//         assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
//     });
//
//     it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
//         assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
//     });
//
//     it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
//         assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
//     });
// });