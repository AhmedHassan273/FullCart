import { Brand } from './brand.model';
import { Category } from './category.model';

export interface Item {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  brand?: Brand;
  category?: Category;
  quantity?: number;
  image?: string;
}
