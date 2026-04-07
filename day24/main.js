// const number = [0,2,3,4]
// let i = 0
// while (i < number.length) {
//     console.log(number[i])
//     i++
// }

// const a = [ 1,4, 6, 9]
// const b = [ 2,3, 5, 8]
// const c = []
// let i = 0
// while ( i < a.length) {
//     c.push(a[i])
//     i++
// }
// let j = 0
// while ( j < b.length) {
//     c.push(b[j])
//     j++
// }
//
// c.sort((a, b) =>
//     a - b
// )
// console.log(c)

const numbers = [2, 9, 5, 1]
const sapxep = (arr) => {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if(arr[j] > arr[i]){
                const tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr

}
console.log(sapxep(numbers))