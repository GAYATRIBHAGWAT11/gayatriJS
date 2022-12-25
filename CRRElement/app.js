let elemnt=document.createElement('li')

elemnt.className='gayatri'
elemnt.id='gayatri11'
elemnt.setAttribute('title', 'hello gayatri')

elemnt.innerHTML='<b>hello this is created by gayatri</b> '

// elemnt.innerText='hello this is created by gayatri '
console.log(elemnt);

let ulList=document.querySelector('ul.this')
console.log(ulList);

ulList.appendChild(elemnt)
let container=document.createElement('div')
let para=document.createElement('div')
para.innerHTML='<h>im gayatri</h>'
console.log("para",para);
container.appendChild(para)
console.log("im container",container);

container.className='container'

// container.insertBefore(para, container);

