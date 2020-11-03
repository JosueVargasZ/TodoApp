import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos:Todo[] = [];

  constructor() {
    if(localStorage.getItem('todos')){
      this.todos.push( ...JSON.parse( localStorage.getItem('todos') ) );
    }
   }

   listTodos( filter: string ){
     if(filter){
      return (filter === 'Pending') ? this.todos.filter( todo => todo.done === false )   : 
      (filter === 'Completed' ) ? this.todos.filter( todo => todo.done === true ) :
      this.todos;
     }
     
   }

   listTodo( id:number ){
     return this.todos[id];
   }

  newTodo( todo:Todo ){
    this.todos.push( todo );
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  completeTodo( id:number, done ){
    this.todos[id].done = done;
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  updateTodo( id:number, todo:Todo ){
    this.todos[id] = todo;
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  deleteTodo( id:number ){

    this.todos.splice( id, 1);
    localStorage.setItem('todos', JSON.stringify( this.todos ) );

  }

}
