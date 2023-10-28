import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private http: HttpClient, private router:Router, private wishlistService:WishlistService) {}
  
  products: any[] = [];
  id:number=0;

  onPageLoad() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products')
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }

  onProductClick(id: number) {
    this.router.navigate(["/viewmore",id]);
  }
  
  addToWishlist(product: any){
    this.wishlistService.addToWishlist(product);
  }

  ngOnInit() {
    this.onPageLoad();
  }
}
