import { Brand } from './brand.model';
import { Category } from './category.model';

export interface Item {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image?: string;
  isActive?: boolean;
  createdAt?: Date;
}
