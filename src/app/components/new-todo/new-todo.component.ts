import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  @Input() todo:Todo ;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() newTodo = new EventEmitter<Todo>();
  @Output() updateTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  createTask( task:string ){
    
    if(!task){
      return;
    }
    const newTask: Todo = {
      date: Date.now(),
      todo: task,
      done: false
    }

    this.newTodo.emit( newTask );
    this.close();
  }

  updateTask( task:string ){
    
    if(!task){
      return;
    }
    
    const newTask: Todo = {
      date: Date.now(),
      todo: task,
      done: this.todo.done
    }

    this.updateTodo.emit( newTask );
    this.close();
  }

  close(){
    this.closeModal.emit(false);
  }

}
