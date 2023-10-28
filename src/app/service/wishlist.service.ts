import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public wishlistItems: any[] = [];
  private wishlistSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.wishlistItems);

  constructor() { }

  getWishlistItems() {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(item: any) {
    this.wishlistItems.push(item);
    this.wishlistSubject.next(this.wishlistItems);
  }
}
