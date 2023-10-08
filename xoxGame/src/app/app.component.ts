import { Component } from '@angular/core';
import { xoxItems } from './Enums/xoxItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xoxGame';

  xoxItem1: any;
  xoxItem2: any;
  xoxItem3: any;
  xoxItem4: any;
  xoxItem5: any;
  xoxItem6: any;
  xoxItem7: any;
  xoxItem8: any;
  xoxItem9: any;
  public xoxItem: xoxItems; // ngModel için bir değişken tanımlanmalıdır
  xoxItems = Object.values(xoxItems);


  //Udemy degiskenleri 
  mark: string = "";
  message: string = "";
  games: any = [];
  moves: any = [];
  gameOver: boolean = false;
  // xoxItem değerini başlangıçta belirlemek isterseniz constructor içinde atayabilirsiniz.
  constructor() {
    this.xoxItem = xoxItems.X; // Varsayılan değer
    this.newGame();
  }


  XoxOyunu() {
    debugger;
    if ((this.xoxItem1 == "X" && this.xoxItem2 == "X" && this.xoxItem3 == "X") || (this.xoxItem1 == "O" && this.xoxItem2 == "O" && this.xoxItem3 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();
    }

    if ((this.xoxItem4 == "X" && this.xoxItem5 == "X" && this.xoxItem6 == "X") || (this.xoxItem4 == "O" && this.xoxItem5 == "O" && this.xoxItem6 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem7 == "X" && this.xoxItem8 == "X" && this.xoxItem9 == "X") || (this.xoxItem7 == "O" && this.xoxItem8 == "O" && this.xoxItem9 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem1 == "X" && this.xoxItem4 == "X" && this.xoxItem7 == "X") || (this.xoxItem1 == "O" && this.xoxItem4 == "O" && this.xoxItem7 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem2 == "X" && this.xoxItem5 == "X" && this.xoxItem8 == "X") || (this.xoxItem2 == "O" && this.xoxItem5 == "O" && this.xoxItem8 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem3 == "X" && this.xoxItem6 == "X" && this.xoxItem9 == "X") || (this.xoxItem3 == "O" && this.xoxItem6 == "O" && this.xoxItem9 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem3 == "X" && this.xoxItem5 == "X" && this.xoxItem7 == "X") || (this.xoxItem3 == "O" && this.xoxItem5 == "O" && this.xoxItem7 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }

    if ((this.xoxItem1 == "X" && this.xoxItem5 == "X" && this.xoxItem9 == "X") || (this.xoxItem1 == "O" && this.xoxItem5 == "O" && this.xoxItem9 == "O")) {
      alert("Oyun Kazanıldı");
      this.xoxAlanSifirlama();

    }


  }

  xoxAlanSifirlama() {
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




  setMark(index: number) {
    debugger;

    if (this.games[index].mark  == "" && this.gameOver == false) {
      this.games[index].mark  = this.mark;
     
      this.message = `Sıradaki :  ${this.mark}`;
      this.moves.push([...this.games]);
      this.isGameOver();
      if(this.gameOver){
        this.message = `Oyun Bitti Kazanan : ${this.mark}`;
      }
      else{
        if (this.mark == "X")
        this.mark = "O";
        else
        this.mark = "X";
      }
    }
  }



  newGame() {
    this.mark = "X";
    this.message = "Sıradaki X";
    this.games = [
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},
      {mark : "" , winner: false},

    ];

    this.gameOver = false;
    this.moves = [];
  }


  isGameOver(){
      if(this.games[0].mark != "" && this.games[0].mark  === this.games[1].mark  && this.games[1].mark  === this.games[2].mark )
      {
        this.gameOver = true;
        this.games[0].winner = true;
        this.games[1].winner = true;
        this.games[2].winner = true;
      }
      if(this.games[3].mark  != "" && this.games[3].mark  === this.games[4].mark  && this.games[4].mark  === this.games[5].mark )
      {
        this.gameOver = true;
        this.games[3].winner = true;
        this.games[4].winner = true;
        this.games[5].winner = true;
      }
      if(this.games[6].mark  != "" && this.games[6].mark  === this.games[7].mark  && this.games[7].mark  === this.games[8].mark )
      {
        this.gameOver = true;
        this.games[6].winner = true;
        this.games[7].winner = true;
        this.games[8].winner = true;
      }
      if(this.games[0].mark  != "" && this.games[0].mark  === this.games[3].mark  && this.games[3].mark  === this.games[6].mark )
      {
        this.gameOver = true;
        this.games[0].winner = true;
        this.games[3].winner = true;
        this.games[6].winner = true;
      }
      if(this.games[1].mark  != "" && this.games[1].mark  === this.games[4].mark  && this.games[4].mark  === this.games[7].mark )
      {
        this.gameOver = true;
        this.games[1].winner = true;
        this.games[4].winner = true;
        this.games[7].winner = true;
      }
      if(this.games[2].mark  != "" && this.games[2].mark  === this.games[5].mark  && this.games[5].mark  === this.games[8].mark )
      {
        this.gameOver = true;
        this.games[2].winner = true;
        this.games[5].winner = true;
        this.games[8].winner = true;
      }
      if(this.games[2].mark  != "" && this.games[2].mark  === this.games[4].mark  && this.games[4].mark  === this.games[6].mark )
      {
        this.gameOver = true;
        this.games[2].winner = true;
        this.games[4].winner = true;
        this.games[6].winner = true;
      }
      if(this.games[0].mark  != "" && this.games[0].mark  === this.games[4].mark  && this.games[4].mark  === this.games[8].mark )
      {
        this.gameOver = true;
        this.games[0].winner = true;
        this.games[4].winner = true;
        this.games[8].winner = true;
      }

      
  }


  changeWinnerButtonClass(winner:boolean){
    if(winner == true)
      return "btn btn-success"
    else
    return "btn btn-warning"
  }

  returnSelectMove(index: number) {
    this.games = this.moves[index];
  }

}
