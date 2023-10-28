import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewMoreComponent } from './view-more/view-more.component';

const routes: Routes = [
  
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'viewmore/:id', component: ViewMoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
