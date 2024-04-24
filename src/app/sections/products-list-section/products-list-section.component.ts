import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-list-section',
  templateUrl: './products-list-section.component.html',
  styleUrl: './products-list-section.component.scss'
})
export class ProductsListSectionComponent {
  @Input() layout: 'grid' | 'row' = 'grid';
  arrayTeste = [0, 0, 0, 0, 0, 0, 0, 0];
  sectionProps = {
    title: `Produtos`,
    subtitle: `Descubra`,
    body: `Explore nossa coleção de inverno`
  }
}
