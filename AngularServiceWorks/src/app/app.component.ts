import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { PersonalService } from './services/personal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularServiceWorks';

  /**
   *
   */
  constructor(private personalService: PersonalService) {
    
  }
  ngOnInit(): void {
    console.log(this.personalService.add());
  }




}
