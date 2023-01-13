// let jsonObj={
//     "name":"gayatr",
//     "food":"spicy",
//     "friend": "gayatri",
// }
// console.log(jsonObj);
// let newJson=JSON.stringify(jsonObj)
// console.log(newJson);

// newJson=newJson.replace('gayatri',"aishwarya")
// console.log(newJson);

// let newParseObj=JSON.parse(newJson)
// console.log(newParseObj);


let object={
    "name":'gayatri',
    "age":'22'
}

let result=JSON.stringify(object)
let result2=JSON.parse(result)
console.log(result2);
let replacedVal=result.replace('gayatri', 'aishwarya')
console.log(replacedVal);

