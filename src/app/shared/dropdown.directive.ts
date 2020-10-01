import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector:"[appDropDown]"
})
export class DropdownDirective{
    constructor(private elRef:ElementRef){}

    @HostBinding("class.open") isOpen:boolean = false;

    @HostListener("click") onClick(){
        this.isOpen = !this.isOpen;
    }
}