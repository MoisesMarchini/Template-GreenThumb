import { BaseModel } from './base-model';

export interface Product extends BaseModel {
  name: string;
  categoryId: string;
  description: string;
  reviews: number[];
  variants: { [key: string]: string }[];
  price: number;
}
