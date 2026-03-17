// const number = [0,2,3,4]
// let i = 0
// while (i < number.length) {
//     console.log(number[i])
//     i++
// }

const a = [ 1,4, 6, 9]
const b = [ 2,3, 5, 8]
const c = []
let i = 0
while ( i < a.length) {
    c.push(a[i])
    i++
}
let j = 0
while ( j < b.length) {
    c.push(b[j])
    j++
}

c.sort((a, b) =>
    a - b
)
console.log(c)