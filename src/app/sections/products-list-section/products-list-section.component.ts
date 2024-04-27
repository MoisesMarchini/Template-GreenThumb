import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-products-list-section',
  templateUrl: './products-list-section.component.html',
  styleUrl: './products-list-section.component.scss',
})
export class ProductsListSectionComponent {
  @ViewChild('productList') productList!: ElementRef<HTMLUListElement>;
  @ViewChildren('productItem') productItem!: QueryList<
    ElementRef<HTMLLIElement>
  >;

  @Input() layout: 'grid' | 'row' = 'grid';

  private scrolling = false;

  arrayTeste = [0, 0, 0, 0, 0, 0, 0, 0];
  products = environment.products;
  sectionProps = {
    title: `Produtos`,
    subtitle: `Descubra`,
    body: `Explore nossa coleção de inverno`,
  };

  scrollLeft() {
    if (this.scrolling) return;

    this.scrolling = true;
    const firstElementWidth = this.productItem.first.nativeElement.offsetWidth;
    const gap = parseFloat(
      getComputedStyle(this.productList.nativeElement).gap
    );

    const resultPreview =
      this.productList.nativeElement.scrollLeft - firstElementWidth + gap;
    this.productList.nativeElement.scrollLeft = resultPreview;

    setTimeout(() => {
      this.scrolling = false;
    }, 250);
  }

  scrollRight() {
    if (this.scrolling) return;

    this.scrolling = true;
    const firstElementWidth = this.productItem.first.nativeElement.offsetWidth;
    const gap = parseFloat(
      getComputedStyle(this.productList.nativeElement).gap
    );

    const resultPreview =
      this.productList.nativeElement.scrollLeft + firstElementWidth + gap;
    this.productList.nativeElement.scrollLeft = resultPreview;

    setTimeout(() => {
      this.scrolling = false;
    }, 250);
  }
}
