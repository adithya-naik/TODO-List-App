let todoList = [];

function add(){
    let inputElement = document.querySelector('.todo-input');
    let inputText = inputElement.value; 

    let dateElement = document.querySelector('.todo-date');
    let inputDate = dateElement.value; 

    let timeElement = document.querySelector('.todo-time');
    let inputTime = timeElement.value; 

    let paraElement = document.querySelector('span');

    todoList.push({item : inputText , dueDate : inputDate , dueTime : inputTime});

    inputElement.value= '';
    dateElement.value = "";
    timeElement.value = "";
    paraElement.innerText = '' ;
    
    display()
}

function display(){
    let containerElement = document.querySelector('.show-container');
    let newHTMl = '';
    for(let i =0 ;i<todoList.length;i++){
        let {item,dueDate,dueTime} = todoList[i];
        newHTMl+=  `
        <span>${item}</span>
        <span>${dueDate}</span>
        <span>${dueTime}</span>
        <button class = "btn-del btn" onclick = "todoList.splice(${i},1); display();">Delete</button>
        `
    }
    containerElement.innerHTML = newHTMl;

}