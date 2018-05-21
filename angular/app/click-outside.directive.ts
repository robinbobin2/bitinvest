import {Directive, ElementRef, Output, EventEmitter, HostListener, Input} from '@angular/core';
 
@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef : ElementRef) {
    }
    @Output()
    public appClickOutside = new EventEmitter();
 
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.appClickOutside.emit(null);
            
        }
    }

}
