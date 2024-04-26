import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product: Partial<Product> = {
    id: '1',
    name: `Nome do produto`,
    description: `Short description`,
    price: 99.99,
  };
}
