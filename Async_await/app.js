const data = [{ name: 'gayatri', profession: "sofwtare enginer" },
{ name: 'ekta', profession: "sofwtare enginer" }];


function getData() {
    setTimeout(() => {
        let output = "";
        data.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}


function createData(newdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(newdata)
            let err = false;
            if (!err) {
                resolve()
            } else {
                reject('kuch sahi nahi hai.....')
            }
        }, 2000);

    })
}


// function createData(newdata, callback){
//     setTimeout(() => {
//         data.push(newdata)
//         callback()
//     }, 2000);
// }
// createData({name:'aishwarya', profession:'software engineer'}, getData)



async function start() {
    await createData({ name: 'vivek', profession: 'sofware engineer' }) //wait pehle create data ko chalne do, badme start ko chalao
    getData();
}
start()