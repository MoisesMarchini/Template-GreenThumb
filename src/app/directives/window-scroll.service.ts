import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowScrollService {
  private scrollSubject = new BehaviorSubject(0);
  $scrollY = this.scrollSubject.asObservable();

  constructor() {}

  setScrollY(scrollY: number): void {
    this.scrollSubject.next(scrollY);
  }
}
