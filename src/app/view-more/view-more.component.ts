import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent {
  constructor(private http: HttpClient) {}

  products: any[] = [];
  id:number=0;

  onPageLoad() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/')
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }

  ngOnInit() {
    this.onPageLoad();
  }
}
