// [-5,-4,-4,-4,0,2,4,6,8]=> input
// output=>[-4,4]

let array = [-5, -4, -4, -4, 0, 2, 4, 6, 8];

// const sumZero = (array) => {
//     for (let number of array) {
//         for (let j = 1; j <= array.length; j++) {
//             if (number + array[j] === 0) {
//                 return [number, array[j]]
//             }
//         }
//     }
// }
// console.log(sumZero(array));
//time complexity=> o(n2)



function findSumPair() {

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        sum = array[left] + array[right]

        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--

        }else {
            left++
        }
    }
}
console.log(findSumPair());
// time complexity=>O(n)



