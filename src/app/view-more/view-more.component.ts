import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css'],
})
export class ViewMoreComponent implements OnInit {
  id: number = 0;
  products: any = {};

  constructor(private http: HttpClient,private route: ActivatedRoute,private wishlistService: WishlistService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  addToWishlist(product: any) {
    this.wishlistService.addToWishlist(product);
  }

  onPageLoad() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/'+this.id)
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }

  ngOnInit() {
    this.onPageLoad();
  }
}
