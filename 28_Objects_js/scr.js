// function counter() {
//     let count = 500

//     return function () {
//         return count++
//     }
// }

// let count = counter()
// console.log(count())
// console.log(count())
// console.log(count())

// const arr = ['John', 'Bob', 'Kate', 'Vasia']

// arr.forEach(function (v, i) {
//     if (i % 2) {
//         console.log(v)
//     }
// })

// const obj = {
//     a: 1,
//     b: 2
// }
// console.log(obj.entries)

const arr = [8, 24, 16, 36]
arr.forEach(function (v, i, a) {

    arr[i] = v * a.length
}
)