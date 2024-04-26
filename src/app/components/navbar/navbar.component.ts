import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { environment } from '../../../environments/environment';

export const NavProps = {
  height: 62,
  getHeight() {
    return `${this.height}px`;
  },
};
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    id: 'navbar',
  },
})
export class NavbarComponent implements OnInit {
  @Input() alwaysFixed: boolean = false;
  isSticked = false;
  linksList = ['Gardening Tips', 'Products', 'Resources', 'More'];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isSticked = window.scrollY > 0 || this.alwaysFixed;
  }
}
