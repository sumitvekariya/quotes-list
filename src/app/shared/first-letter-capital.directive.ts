import { Directive, ElementRef, Renderer2, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[FirstLetterCapital]'
})
export class FirstLetterCapitalDirective implements AfterContentChecked {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterContentChecked() {
    this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'titlecase');
  }

}
