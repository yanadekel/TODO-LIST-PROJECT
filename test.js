
class TodoList {
  constructor() {
    this.listArr = [];
  }

  creatTask(content) {
    let task = new TodoTask(content);
    this.listArr.push(task);
  }

  readTask(id) {
    return this.listArr.find(elm => elm.id === id);

  }

  deletTask(id) {
    let index = this.listArr.indexOf(this.readTask(id));
    return this.listArr.splice(index, 1);
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

module.exports= TodoList;

// addTodo = ;


// const  t1 = new TodoList();
// t1.creatTask('dy');
// // t1.print();
// t1.updateTask('hila', 1);
