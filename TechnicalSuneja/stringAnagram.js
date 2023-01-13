

// function DigitalClock() {
//     setInterval(() => {
//         console.log(new Date().toLocaleTimeString())
//     }, 1000)
// }
// DigitalClock()

// string anagram
// 'hello=> 'llheo' //llheo<= if likethis thenits not anagram

//{h:1, e:1; l: 2, 0:1} like this



function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }
    let counter = {}
    for (let letter of string1) {
        // console.log(letter);
        counter[letter] = (counter[letter] || 0) + 1
        console.log(counter)
    }
    for (let items of string2) {
        if (!counter[items]) {
            return false
        }
        counter[items] -= 1
    }
    return true;
}
const check=isAnagram('hello', 'llheo')
console.log(check);

// linear time complexity= O(n)
