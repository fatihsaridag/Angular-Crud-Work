import { Component } from '@angular/core';
import { xoxItems } from './Enums/xoxItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xoxGame';

  xoxItem1 : any;
  xoxItem2 : any;
  xoxItem3 : any;
  xoxItem4 : any;
  xoxItem5 : any;
  xoxItem6 : any;
  xoxItem7 : any;
  xoxItem8 : any;
  xoxItem9 : any;

  public xoxItem: xoxItems; // ngModel için bir değişken tanımlanmalıdır

  xoxItems = Object.values(xoxItems);

  // xoxItem değerini başlangıçta belirlemek isterseniz constructor içinde atayabilirsiniz.
  constructor() {
    this.xoxItem = xoxItems.X; // Varsayılan değer
  }


  XoxOyunu(){
    debugger;
    if((this.xoxItem1 == "X" && this.xoxItem2 == "X" && this.xoxItem3 == "X") || (this.xoxItem1 == "O" && this.xoxItem2 == "O" && this.xoxItem3 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();
    }

    if((this.xoxItem4 == "X" && this.xoxItem5 == "X" && this.xoxItem6 == "X") || (this.xoxItem4 == "O" && this.xoxItem5 == "O" && this.xoxItem6 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if((this.xoxItem7 == "X" && this.xoxItem8 == "X" && this.xoxItem9 == "X") || (this.xoxItem7 == "O" && this.xoxItem8 == "O" && this.xoxItem9 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }
    
    if((this.xoxItem1 == "X" && this.xoxItem4 == "X" && this.xoxItem7 == "X") || (this.xoxItem1 == "O" && this.xoxItem4 == "O" && this.xoxItem7 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if((this.xoxItem2 == "X" && this.xoxItem5 == "X" && this.xoxItem8 == "X") || (this.xoxItem2 == "O" && this.xoxItem5 == "O" && this.xoxItem8 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if((this.xoxItem3 == "X" && this.xoxItem6 == "X" && this.xoxItem9 == "X") || (this.xoxItem3 == "O" && this.xoxItem6 == "O" && this.xoxItem9 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if((this.xoxItem3 == "X" && this.xoxItem5 == "X" && this.xoxItem7 == "X") || (this.xoxItem3 == "O" && this.xoxItem5 == "O" && this.xoxItem7 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if((this.xoxItem1 == "X" && this.xoxItem5 == "X" && this.xoxItem9 == "X") || (this.xoxItem1 == "O" && this.xoxItem5 == "O" && this.xoxItem9 == "O")   ){
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }


  }


  xoxAlanSifirlama(){
    this.xoxItem1 = null;
    this.xoxItem2 = null;
    this.xoxItem3 = null;
    this.xoxItem4 = null;
    this.xoxItem5 = null;
    this.xoxItem6 = null;
    this.xoxItem7 = null;
    this.xoxItem8 = null;
    this.xoxItem9 = null;
  }
}
