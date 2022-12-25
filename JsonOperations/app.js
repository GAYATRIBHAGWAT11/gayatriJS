let jsonObj={
    "name":"gayatr",
    "food":"spicy",
    "friend": "gayatri",
}
console.log(jsonObj);
let newJson=JSON.stringify(jsonObj)
console.log(newJson);

newJson=newJson.replace('gayatri',"aishwarya")
console.log(newJson);

let newParseObj=JSON.parse(newJson)
console.log(newParseObj);

