import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FiltreComponent } from './filtre/filtre.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ReductionComponent } from './reduction/reduction.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsByCatComponent } from './shops-by-cat/shops-by-cat.component';
import { ClientGuard } from './client.guard';
import { AdminGuard } from './admin.guard';
import { AddcatComponent } from './addcat/addcat.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddreducComponent } from './addreduc/addreduc.component';
import { AddshopComponent } from './addshop/addshop.component';
import { ViewcatComponent } from './viewcat/viewcat.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ViewprodComponent } from './viewprod/viewprod.component';
import { ViewshopComponent } from './viewshop/viewshop.component';
import { ViewredComponent } from './viewred/viewred.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'adminpanel', component: AdminpanelComponent  },
  { path: 'addcat', component: AddcatComponent },
  { path: 'addprod', component: AddproductComponent },
  { path: 'addred', component: AddreducComponent },
  { path: 'addshop', component: AddshopComponent  },
  { path: 'viewcat', component: ViewcatComponent },
  { path: 'viewprod', component: ViewprodComponent  },
  { path: 'viewshop', component: ViewshopComponent  },
  { path: 'viewred', component: ViewredComponent  },
  { path: 'login', component: LoginComponent },



  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'reduction', component: ReductionComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'shops-by-cat/:categoryId', component: ShopsByCatComponent },
   
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
