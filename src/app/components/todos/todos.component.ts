import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { TodosService } from '../../services/todos.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnChanges {

  @Input() filterTodos: string;
  public todos: Todo[]= [];
  public animate:boolean;
  public showModal:boolean = false;
  public showUpdateModal:boolean = false;
  public todo: Todo;
  public todoId: number;

  constructor( private _todosService: TodosService ) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.todos = this._todosService.listTodos( this.filterTodos );
  }

  openModal(){
    this.animate = true;
    this.showModal = true;
  }

  closeModal( close:boolean ){
    this.animate = false
    setTimeout(() => {
      this.showModal = close;
      this.showUpdateModal = close;
    }, 400);
  
  }

  getTodo( id ){
    this.todo    = this._todosService.listTodo( id );
    this.todoId  = id;
    this.animate = true;
    this.showUpdateModal = true;
  }

  createTodo( todo:Todo ){
    this._todosService.newTodo( todo );
    this.todos = this._todosService.listTodos( this.filterTodos );
  }

  deleteTodo( id, todo:HTMLElement ){
    todo.classList.add('slide-out');
    setTimeout(() => {
      this._todosService.deleteTodo( id );
      this.todos = this._todosService.listTodos( this.filterTodos );
    }, 200);

  }

  updateTodo( todo:Todo ){
    this._todosService.updateTodo(todo.id , todo );
  }

  completeTodo( id:number, done:boolean ){
    this._todosService.completeTodo( id, done );
    this.todos = this._todosService.listTodos( this.filterTodos );
  }

}
