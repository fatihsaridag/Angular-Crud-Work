import { Component, Injectable } from '@angular/core';
import { ProductService } from './productservice';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularDependencyInjectionWorks';

  constructor(private productService : ProductService){
    console.log(productService.getProducts());
  }

}
