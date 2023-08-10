import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FiltreComponent } from './filtre/filtre.component';
import { ProductsComponent } from './products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryComponent } from './category/category.component';
import { ShopsComponent } from './shops/shops.component';
import { ReductionComponent } from './reduction/reduction.component';
import { ShopsByCatComponent } from './shops-by-cat/shops-by-cat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { AddcatComponent } from './addcat/addcat.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddshopComponent } from './addshop/addshop.component';
import { AddreducComponent } from './addreduc/addreduc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewcatComponent } from './viewcat/viewcat.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { GobackComponent } from './goback/goback.component';
import { ViewprodComponent } from './viewprod/viewprod.component';
import { ViewshopComponent } from './viewshop/viewshop.component';
import { ViewredComponent } from './viewred/viewred.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FiltreComponent,
    ProductsComponent,
    CategoryComponent,
    ShopsComponent,
    ReductionComponent,
    ShopsByCatComponent,
    ImagePopupComponent,
    AddcatComponent,
    AddproductComponent,
    AddshopComponent,
    AddreducComponent,
    ViewcatComponent,
    AdminpanelComponent,
    GobackComponent,
    ViewprodComponent,
    ViewshopComponent,
    ViewredComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
