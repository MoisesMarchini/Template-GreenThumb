import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks1: string[] = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
    'Link 5',
  ];
  footerLinks2: string[] = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
    'Link 5',
  ];
}
