import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetAutoFocus]'
})
export class SetAutofocusDirective implements AfterContentInit {

  constructor( private el: ElementRef) { }

  ngAfterContentInit(){
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 400);
  }

}
