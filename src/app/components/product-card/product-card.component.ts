import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = {
    title: `Nome do produto`,
    description: `Short description`,
    price: `R$99,99`
  }
}
