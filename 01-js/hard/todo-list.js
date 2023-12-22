/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoArr = [];
  }

  add(todo){
    this.todoArr.push(todo);
  }

  clear() {
    this.todoArr = [];
  }

  remove(index){
    if(index >= 0 && index < this.todoArr.length){
      this.todoArr.splice(index,1); // .splice(what to remove , how many items to remove)
    }
  }

  getAll(){
    return this.todoArr;
  }

  get(index){
    if(index >= 0 && index < this.todoArr.length){
    return this.todoArr[index];
    } 
    return null; // Return null for invalid index
  }

  update(index, updatedTodo){
    if(index >= 0 && index < this.todoArr.length){
        this.todoArr[index] = updatedTodo;
    }
  }

}
module.exports = Todo;
