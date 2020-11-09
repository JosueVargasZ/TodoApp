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
     let todoResponse: Todo;
     this.todos.map( todo => {
       if( todo.id === id ){
        todoResponse = todo; 
      }
    });
    return todoResponse;
   }

  newTodo( todo:Todo ){
    this.todos.push( todo );
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  completeTodo( id:number, done ){
    this.todos.map( todo => {
      if(todo.id === id ){
        todo.done = done;
      } 
    });
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  updateTodo( id:number, updateTodo:Todo ){
    this.todos.map( todo => {
      if(todo.id === id ){
        todo.todo = updateTodo.todo;
        todo.done = updateTodo.done;
      } 
    });
    localStorage.setItem('todos', JSON.stringify( this.todos ) );
  }

  deleteTodo( id:number ){
    this.todos = this.todos.filter( todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify( this.todos ) );

  }

}
