// let i = 0
// for(i = 1; i <= 10; i++) {
//     console.log(i);
// }
// const numbers = [1, 3, 5, 3, 3, 4, 9, 8];
//
//
// // Bai 1: In ra cac phan tu
// function printElements(arr) {
//     if (!Array.isArray(arr)) return;
//     if(arr.length === 0) return;
//
//     console.log("All elements:");
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printElements(numbers);
//
// // Bai 2: in ra so chan
// function printEvenNumbers(arr) {
//     console.log("Even numbers:");
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// printEvenNumbers(numbers);
// // Bai 3: tinh tong cac phan tu le
// function sumOddNumbers(arr) {
//     if (!Array.isArray(arr)) return;
//     if(arr.length === 0) return;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     console.log("Sum of odd numbers:", sum);
// }
// sumOddNumbers(numbers);
// // Bai 4: So lon nhat
// function findMax(arr) {
//     if (!Array.isArray(arr)) return;
//     if(arr.length === 0) return;
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log("Max number:", max);
// }
// findMax(numbers)
// // Bai 5: So nho nhat
// function findMin(arr) {
//     if (!Array.isArray(arr)) return;
//     if(arr.length === 0) return;
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log("Min number:", min);
// }
// findMin(numbers);
// // Bai 6: Sap xep tu be den lon
// function sortAscending(arr) {
//     if (!Array.isArray(arr)) return;
//     if(arr.length === 0) return;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//
//     console.log("Array after sorting ascending:");
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// sortAscending(numbers)

//=====================================================
// const numbers =[2,9,5,1]
// for(const i of numbers){
//     console.log(i)
// }

// const sortedNumber =[1,2,3,5,7,9,11,12,13]
// /*
// Tim vi tri so 11
//  */
// function getIndex(arr,n){
//     if (!Array.isArray(arr)) {
//         console.error('invalid array')
//         return;
//     }
//     if(arr.length === 0) {
//         console.error('invalid array')
//         return;
//     }
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] === n){
//             return i
//         }
//     }
// }
// console.log(getIndex(sortedNumber,11))

const sortedNumber =[1,2,3,5,7,9,11,12,13]
// log ra nhung so nho hon 11
let count = 0
for(const i of sortedNumber){
    count++
    if( i < 11){
        console.log(i)
    }
    else{
        break
    }
}
console.log(count)