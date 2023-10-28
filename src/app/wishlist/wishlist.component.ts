import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private wishlistservice: WishlistService) {}

  wishList() {
    this.wishlistItems = this.wishlistservice.wishlistItems;
  }
  ngOnInit() {
    this.wishList();
  }
}
