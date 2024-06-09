let todoList = [];

function add(){
    let inputElement = document.querySelector('.todo-input');
    let inputText = inputElement.value; 

    let dateElement = document.querySelector('.todo-date');
    let inputDate = dateElement.value; 

    todoList.push({item : inputText , dueDate : inputDate });

    inputElement.value= '';
    dateElement.value = "";
    
    display()
}

function display(){
    let containerElement = document.querySelector('.show-container');
    let newHTMl = '';
    for(let i =0 ;i<todoList.length;i++){
        let {item,dueDate} = todoList[i];
        newHTMl+=  `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class = "btn-del btn" onclick = "todoList.splice(${i},1); display();">Delete</button>
        `
    }
    containerElement.innerHTML = newHTMl;

}