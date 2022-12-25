
// create element
let divElem = document.createElement('div')
// add text to that elemnt
let text = document.createTextNode('this is my element. click to edit it')
divElem.appendChild(text)
// give class , id to newly created element
console.log("this is text", text);
divElem.setAttribute('id', 'elem')
// divElem.style.border='2px solid black; width:154px'
divElem.setAttribute('style', 'border:2px solid black; width:180px; height:200px margin:34px')
// grab the main container
let container = document.querySelector('.container')
let first = document.getElementById('myfirst')


// insert the element before element with id first
container.insertBefore(divElem, first)


console.log(divElem, container, first);

divElem.addEventListener('click', function () {
    let noTestArea = document.getElementsByClassName('textarea').length;
    if (noTestArea == 0) {
        let html = elem.innerHTML;
        console.log('this is htm', html);
        divElem.innerHTML = `<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value.toUpperCase();
    })
})