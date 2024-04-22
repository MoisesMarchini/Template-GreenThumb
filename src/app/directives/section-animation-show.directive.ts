import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'section, .show-anim',
})
export class SectionAnimationShowDirective implements OnInit {
  @Input() delayIndex: number = 0;
  private show = false;
  private percentVisibleThreshold = 0; // Porcentagem de visibilidade desejada
  private additionalOffset = 5; // Deslocamento adicional em pixels

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.setProperty('--_anim-delay-index', `${this.delayIndex}`);
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const percentVisibleThreshold = this.percentVisibleThreshold / 100;
    const additionalOffset = this.additionalOffset;

    const element = this.elementRef.nativeElement;
    const viewportHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + scrollPosition + additionalOffset;
    const elementBottom = elementRect.bottom + scrollPosition;
    const elementHeight = elementRect.height;

    const visibleHeight =
      Math.min(elementBottom, scrollPosition + viewportHeight) -
      Math.max(elementTop, scrollPosition);
    const visiblePercent = visibleHeight / elementHeight;

    const isAboveViewport = elementTop < scrollPosition + viewportHeight;

    this.show = isAboveViewport || visiblePercent >= percentVisibleThreshold;
  }

  @HostBinding('class.hide-section')
  get hideClass() {
    return !this.show;
  }
}
