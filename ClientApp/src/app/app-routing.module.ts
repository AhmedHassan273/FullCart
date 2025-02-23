import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { BrandsListComponent } from './components/brands/brands-list/brands-list.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { EditBrandComponent } from './components/brands/edit-brand/edit-brand.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { ItemsListResolver } from './resolvers/items-list.resolver';
import { ItemResolver } from './resolvers/item.resolver';
import { AddCategoryComponent } from './components/categorys/add-category/add-category.component';
import { categoriesListComponent } from './components/categorys/categoriess-list/categories-list.component';
import { EditCategoryComponent } from './components/categorys/edit-category/edit-category.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'categories',
    children: [
      { path: '', component: categoriesListComponent },
      { path: 'edit/:categoryId', component: EditCategoryComponent },
      { path: 'new', component: AddCategoryComponent },
    ],
  },
  {
    path: 'brands',
    children: [
      { path: '', component: BrandsListComponent },
      { path: 'edit/:brandId', component: EditBrandComponent },
      { path: 'new', component: AddBrandComponent },
    ],
  },
  {
    path: 'items',
    children: [
      {
        path: '',
        component: ItemsListComponent,
        resolve: {
          items: ItemsListResolver,
        },
      },
      {
        path: 'edit/:itemId',
        component: EditItemComponent,
        resolve: {
          item: ItemResolver,
        },
      },
      { path: 'new', component: AddItemComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
