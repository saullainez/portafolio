import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) { 

  }

  ngOnInit(): void {
    var element = this.el.nativeElement;
    element.style.background = "blue";
    element.style.padding = "20px";
    element.style.marginTop = "15px";
    element.style.color = "white"; 
    
  }

}
