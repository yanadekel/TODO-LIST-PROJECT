
const addTodo = document.querySelector('.addTodo');
const list = document.querySelector('.todos');
const search= document.querySelector('.search input');

//add todo
addTodo.addEventListener('submit', e => {
  e.preventDefault();
  const printContent = addTodo.add.value.trim();
  if(printContent.length){
    t1.creatTask(printContent);
    addTodo.reset();
  }

});

//delet todos
list.addEventListener('click', e=>{
  console.log("Event Listener deleteL "+e.target)
  if(e.target.classList.contains('delete')){
    t1.deletTask(e.target.parentElement.remove());
  }
})

//search => keyup event
search.addEventListener('keyup', ()=>{
  const term = search.value.trim().toLowerCase();
  this.filterTodos(term);
});

class TodoList {
  constructor() {
  this.listArr = [];
  }

  generatTemplate(task) {
    const html = `
    <li id=${task.id} class=" list-group-item d-flex justify-content-between align-items-center">
    <span>${task.content}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html;
  }

//   filterTodos(term){
//   Array.frome(list.children)
//   .filter((printContent)=>!printContent.textContent.toLowerCase().includes(term))
//   .forEach((printContent)=>printContent.classList.add('filtered'));  

//   Array.frome(list.children).filter(id)=>printContent.textContent.toLowerCase().includes(term))
//   .forEach((printContent)=>printContent.classList.remove('filtered'));
//  }

  creatTask(content) {
    let task = new TodoTask(content);
    this.listArr.push(task);
    this.generatTemplate(task)
  }

  readTask(id) {
    return this.listArr.find(elm => elm.id === id);


  }

  deletTask(id) {
    let index = this.listArr.indexOf(this.readTask(id));
    this.listArr.splice(index, 1);
   
  }

  updateTask(content, id) {
    let task = this.readTask(id);
    task.content = content;
    return task;
  }

  print() {
    console.log(this.listArr);
  }
}





class TodoTask {
  static staticIndex = 0
  constructor(content) {
    TodoTask.staticIndex += 1;
    this.content = content;
    this.id = TodoTask.staticIndex;
    this.done = false;
  }
}




class insertDom {
  constractor() {

  }
}


const t1 = new TodoList();

// // t1.print();
// t1.updateTask('hila', 1);
