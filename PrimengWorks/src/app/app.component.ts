import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PrimengWorks';
  value : string;
  products : [];

  constructor(private _productService : ProductService){}



  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this._productService.getProductList().subscribe(
      response => this.products = response
    )
  }

}
