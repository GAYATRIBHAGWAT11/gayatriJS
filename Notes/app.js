// if user adds a task, add to localstorage
console.log("Welcome to tasks app. This is app.js");
let headRed = document.querySelector('.head-red')
let homeLink=document.querySelector('.home')
homeLink.addEventListener('click', function(){
    showtasks();
})



let menu=[]

let colors = ["red", "yellow"]


let addTxt = document.getElementById("addTxt");
// If user adds a task, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    //   let addTxt = document.getElementById("addTxt");
    let tasks = localStorage.getItem("tasks");
    if (tasks == null) {
        tasksObj = [];
    } else {
        tasksObj = JSON.parse(tasks);
    }
    tasksObj.push(addTxt.value);
    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    addTxt.value = "";
    //   console.log(tasksObj);
    showtasks();
});

// Function to show elements from localStorage
function showtasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks == null) {
        tasksObj = [];
    } else {
        tasksObj = JSON.parse(tasks);
    }
    let html = "";
    tasksObj.forEach(function (element, index) {
        html += `
            <div class="taskCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">task ${index+1}</h5>
                        <p class="card-text" readonly> ${element}</p>
                        <i id="${index}"onclick="deleteTask(${index})" class="fa fa-trash"></i>
                        <i  onclick="editTask(${index}, ${element})" class="fa fa-pencil"></i>
                        <i onclick="toggleStar()"  style="color: red;" class="fa fa-star-half-empty red"></i>
                        <i  style="color: green;" class="fa fa-check check"></i>
                    </div>
                </div>`;
    });
    let tasksElm = document.getElementById("tasks");
    if (tasksObj.length != 0) {
        tasksElm.innerHTML = html;
    } else {
        tasksElm.innerHTML = `Nothing to show! Use "Add a task" section above to add tasks.`;
    }

}




// Function to delete a task
function deleteTask(index) {
      console.log("I am deleting", index);

    let tasks = localStorage.getItem("tasks");
    if (tasks == null) {
        tasksObj = [];
    } else {
        tasksObj = JSON.parse(tasks);
    }



    tasksObj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    showtasks();
}
// edit task
function editTask(id, taskName) {
    console.log(id, taskName);
    addTxt.value = taskName;
}
// color filter

function toggleStar(){
    let taskCard = document.querySelector('.taskCard')
    let redstar=document.querySelector('.red')
    const randomNumber=getRandomNumber()
    taskCard.style.backgroundColor=colors[randomNumber]
    redstar.style.color="black"
}
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

// its time for filer
// filterBtn.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         let taskCard = document.querySelector('.taskCard')
//         const category=e.currentTarget.dataset
//         console.log(category);
//         menu.push(category)
//         console.log(menu);
//         let newCat=menu.filter((elements)=>{
            
//         })
//     })
// })
 const filterItem=document.querySelectorAll('.filter-btn')
filterItem.forEach((elements)=>{
    let taskCard = document.querySelector('.taskCard')
     let finalVal=elements.innerText;
     console.log("background color",taskCard.style);
 })






// adding task as per there color and check
headRed.addEventListener('click', function () {
    let taskCard = document.querySelector('.taskCard')
    if (taskCard.style.backgroundColor == "red") {
        showtasks()
    }
})


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let taskCards = document.getElementsByClassName('taskCard');
    Array.from(taskCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
