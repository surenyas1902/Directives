import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {

  }

  @Input('backgroundColor') set setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  @Input('classNames') set setClassNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key)
      }
      else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
