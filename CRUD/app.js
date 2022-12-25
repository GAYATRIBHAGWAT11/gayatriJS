// add_btn
let parentList = document.getElementById('parentList')
let addBtn = document.querySelector('.add_btn')
addBtn.addEventListener('click', addChapter)

function addChapter(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    console.log(e);
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentCahpter = currentInput.value;

    let newLi = document.createElement('li')
    // newLi.classList.add(';ist-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML += `<h3>${currentCahpter}</h3>
    <button class="btn btn-warning" onclick="editChapter(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeChapter(this)">remove</button>`
    parentList.appendChild(newLi)

}
// remove functionality

function removeChapter(currElem) {
    currElem.parentElement.remove()

    if (parentList.children.length <= 0) {
        let newMessage = document.createElement('h3')
        newMessage.innerText = "nothing is here please add a chapter"
        newMessage.classList.add("emptyMsg")
        parentList.appendChild(newMessage)
    }
}

function editChapter(currElem) {

    if (currElem.innerText == "done") {
        currElem.innerText=="edit"
        console.log("currElem.previousElementSibling.value;",currElem.previousElementSibling.value);
        let currChapterName = currElem.previousElementSibling.value;
        console.log("currChapterName", currChapterName);
        let currHeading=document.createElement('h3')
        // currHeading.className='flex-'
        currHeading.innerText=currChapterName;
        currElem.parentElement.replaceChild(currHeading, currElem.previousElementSibling)
    } else {
        currElem.innerText = "done"
        console.log(currElem.previousElementSibling);
        let currChapterName = currElem.previousElementSibling.innerText;
        let currInput = document.createElement('input')
        currInput.type = "text"
        currInput.placeholder = "chapter name"
        currInput.className = "form-control"
        currInput.value = currChapterName;
        currElem.parentElement.replaceChild(currInput, currElem.previousElementSibling)
    }

}