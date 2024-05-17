import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowScrollService {
  private scrollSubject = new BehaviorSubject(0);
  $scrollY = this.scrollSubject.asObservable();

  constructor() {
    window.addEventListener('scroll', (ev) =>
      this.setScrollY(window.screenTop)
    );
  }

  setScrollY(scrollY: number): void {
    this.scrollSubject.next(scrollY);
  }
}
