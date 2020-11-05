import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ToDoApp';
  public filterTodos : string;
  public todoGrid: boolean;

  constructor(){}

  onFilter( value ){
    this.filterTodos = value;
  }

  onGrid( value: boolean ){
    this.todoGrid = value;
  }
}
