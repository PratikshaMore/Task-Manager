import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string
    // new Todo(1,'Learn to Dance', false, new Date()),
    // new Todo(2,'Become an Expert', false, new Date()),
    // new Todo(3,'Visit India', true, new Date())
    // {id:1, description:'Learn to Dance'},
    // {id:2, description:'Become an Expert'},
    // {id:3, description:'Visit India'}
  
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }
  constructor(
    private todoservice: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
     
  }

  refreshTodos(){
    this.todoservice.retrieveAllTodos('pratiksha').subscribe(
      response => {
        console.log(response);
        this.todos = response;

      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo${id}`);
    this.todoservice.deleteTodo('pratiksha', id).subscribe(
      response => {
        console.log(response)
        this.message= `Delete Susscessful for ${id}`;
        this.refreshTodos();

      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
   this.router.navigate(['todos',id])
  }

  addTodo(id){
   this.router.navigate(['todos',-1])
  }

}
