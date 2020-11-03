import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() filterTodos = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {
    this.onFilter('All');
  }

  onFilter( value: string ){
    this.filterTodos.emit( value );
  }

}
