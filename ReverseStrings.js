// function ReverseStr(str){
//     let emptyStr=""
// for(let i=str.length;i>=0;i--){
//      emptyStr=str[i]
//      console.log(emptyStr, typeof emptyStr);
//     //  emptyStr.split("").reverse().join("");
// }
// }
// console.log(ReverseStr('face prep wants you to do great'));



function sumOfFour(arr, size, sum) {
    for (let i = 0; i < size - 3; i++) {
        for (let j = i + 1; i < size - 2; j++) {
            for (let k = j + 1; k < size - 1; k++) {
                for (let l = k + 1; l < size; l++) {
                    if (arr[i] + arr[j] + arr[k] + arr[l] == sum) {
                        return arr[i]+","+arr[j]+","+arr[k]+"," +arr[l]
                    }
                }
            }
        }
    }
    // return arr[i], arr[j], arr[k], arr[l]
}
console.log(sumOfFour([3, 7, 1, 9, 15, 14, 6, 2, 5, 7], 10, 24));