//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const smile = arr[i]

        if (isSmile(smile)) count++
    }

    return count;
}

function isSmile(smile) {
    if ([':',';'].includes(smile[0])) {
        if (['-', '~'].includes(smile[1])) {
            return [')', 'D'].includes(smile[2]);
        }
        return [')', 'D'].includes(smile[1]);
    }
    return false
}

console.log(countSmileys([':D',':~)',';~D',':)'])) // 4
console.log(countSmileys([':)',':(',':D',':O',':;'])) // 2
