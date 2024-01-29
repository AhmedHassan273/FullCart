import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { CategorysListComponent } from './components/categorys/categorys-list/categorys-list.component';
import { BrandsListComponent } from './components/brands/brands-list/brands-list.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { AddCategoryComponent } from './components/categorys/add-category/add-category.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { EditBrandComponent } from './components/brands/edit-brand/edit-brand.component';
import { EditCategoryComponent } from './components/categorys/edit-category/edit-category.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RegisterComponent,
    HomeComponent,
    CategorysListComponent,
    BrandsListComponent,
    ItemsListComponent,
    LoginPageComponent,
    AddBrandComponent,
    AddCategoryComponent,
    AddItemComponent,
    ItemsListComponent,
    CategorysListComponent,
    BrandsListComponent,
    EditBrandComponent,
    EditCategoryComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
