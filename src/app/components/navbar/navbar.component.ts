import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() filterTodos = new EventEmitter<string>();
  @Output() todosOnGrid = new EventEmitter<boolean>();
  public showGrid:boolean = true;

  constructor() {
   }

  ngOnInit(): void {
    this.onFilter('All');
    this.todosOnGrid.emit( this.showGrid );
  }

  onFilter( value: string ){
    this.filterTodos.emit( value );
  }

  onGrid( value: boolean ){
    this.showGrid = value;
    this.todosOnGrid.emit( value );
  }

}
