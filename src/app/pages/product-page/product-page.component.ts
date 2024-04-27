import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SelectOption } from '../../components/inputs/input-select/input-select.component';
import { SectionsModule } from '../../sections/sections.module';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ComponentsModule, CommonModule, SectionsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  @Input() id: string = '';
  product: Product = environment.products[0];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.loadProduct();
    });
  }

  loadProduct() {
    this.product =
      environment.products.find((product) => product.id === this.id) ??
      this.product;
  }

  getSelectionOptions() {
    const options: SelectOption[] = [
      {
        label: 'Vermelho',
        value: 'red',
      },
      {
        label: 'Verde',
        value: 'green',
      },
      {
        label: 'Azul',
        value: 'blue',
      },
    ];

    return options;
  }

  getReviewStars() {
    return (
      this.product.reviews.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      ) / this.product.reviews.length
    );
  }
}
