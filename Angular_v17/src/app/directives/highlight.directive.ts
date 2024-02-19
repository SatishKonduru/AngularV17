import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  constructor() { }
  @HostBinding('style.backgroundColor') bgColor? : string;
  @HostBinding('style.color') textColor? : string;
  @HostListener('click') onMouseEnter(){
    if(this.bgColor === '#0000ff'){
      this.bgColor = '#00aa00'
      this.textColor = '#000000'
    }
    else{
      this.bgColor = '#0000ff'
      this.textColor = '#ffffff'
    }
  }
  ngOnInit(): void {
      this.bgColor = '#0000ff'
      this.textColor = '#ffffff'
  }
}
