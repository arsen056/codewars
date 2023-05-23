function towerBuilder(nFloors) {
    let item = '*'
    const res = []
    let nFloorsCount = nFloors
    for (let i = nFloors; i > 0; i--) {
        res.unshift(item.repeat((i * 2) - 1))
    }

    for (let i = 0; i < res.length; i++) {
        res[i] = `${' '.repeat(nFloorsCount - 1)}${res[i]}${' '.repeat(nFloorsCount - 1)}`
        nFloorsCount--
    }

    return res
}

console.log(towerBuilder(3))
console.log(towerBuilder(5))
console.log(towerBuilder(7))