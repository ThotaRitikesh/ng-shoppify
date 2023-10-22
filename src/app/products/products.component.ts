import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private http: HttpClient) {}

  products: any[] = [];

  onPageLoad() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products')
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }

  ngOnInit() {
    this.onPageLoad();
  }
}
