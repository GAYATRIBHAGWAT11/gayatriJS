let object={
    name:'gayatri',
    age:22
}
let myFun=function(city){
    console.log(`my name is ${this.name} im ${this.age} years old and im living in ${city} & my fav color is ${color}`);
}
myFun.call(object, 'nashik')
myFun.apply(object, ['singapore', 'black'])

// let myBind=myFun.bind(object, ['canada', 'black'])
// myBind() 