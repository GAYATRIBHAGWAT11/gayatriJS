let arrName = [{ name: 'gayatri', pass: 'bhagwat' }, { name: 'gayatri', pass: 'bhagwat' }]
console.log(arrName.indexOf({ name: 'gayatri', pass: 'bhagwat' }));


let a = {}
let b = a
let c = {}

console.log(a == c);
console.log("a+b" + a == b);
console.log(a == a);

// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name="apple"//undefined
//     let price=20 //error
// }
// fruit()


for(var i=0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


// for(let i=0; i<3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


// function closure() {
//     for (var i = 0; i <= 3; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, 1000);
//         }
//         close(i)
//     } 
// }
// closure()

console.log("here", +true); //1
console.log(typeof +true); //number


console.log(!"gayatri"); //false
console.log(typeof "gayatri"); //string


let data="size"

const bird={
    size: "small",
}
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.data); //undefined 
console.log(bird.size); //small


// var x;
// let x=10;
// console.log(x); //error


let z=3;
let y= new Number(3)

console.log(z==y);  //true => number
console.log(z===y); //false => object


