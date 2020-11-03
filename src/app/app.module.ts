import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosGridComponent } from './components/todos-grid/todos-grid.component';
import { SetAutofocusDirective } from './directives/set-autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    NewTodoComponent,
    FooterComponent,
    TodosGridComponent,
    SetAutofocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
