import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-img-wrapper',
  templateUrl: './placeholder-img-wrapper.component.html',
  styleUrl: './placeholder-img-wrapper.component.scss',
  host: {
    class: 'grid',
  },
})
export class PlaceholderImgWrapperComponent {
  @Input() imgSrc?: string;
  @Input() customCss?: string;
  @Input() load?: string = 'lazy';
}
