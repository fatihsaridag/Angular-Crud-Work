import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <div class="container" style="margin-top:30px;">

  <div *ngIf="!isUpdateFormActive else update">
                 <h1>Todo App</h1>
                  <hr>
                  <div class="form-group">
                    <label for="work"></label>
                    <input [(ngModel)]="work" type="text" class="form-control" id="work" name="work"/>
                  </div>
                  <div class="form-group mt-2">
                    <div class="btn btn-outline-primary w-100" (click)="Kaydet()">Kaydet</div>
                  </div>
                  <hr>

                      <ul>
                        <li *ngFor="let work of workList let i = index">{{work}}
                          <button class="btn btn-outline-warning btn-sm" (click)="Get(i)">Güncelle</button>
                          <button class="btn btn-outline-danger btn-sm" (click)="Remove(i)">Sil</button>
                        </li>
                      </ul>
  </div>
  <ng-template #update>
  <h1>Todo App</h1>
                  <hr>
                  <div class="form-group">
                    <label for="work"></label>
                    <input [(ngModel)]="updateWork" type="text" class="form-control" id="work" name="work"/>
                  </div>
                  <div class="form-group mt-2">
                    <div class="btn btn-outline-primary w-100" (click)="Kaydet()">Kaydet</div>
                  </div>
                  <hr>

                      <ul>
                        <li *ngFor="let work of workList let i = index">{{work}}
                          <button class="btn btn-outline-warning btn-sm" (click)="Update()">Güncelle</button>
                          <button class="btn btn-outline-danger btn-sm" (click)="Remove(i)">Sil</button>
                        </li>
                      </ul>
  </ng-template>     
</div>

`
})
export class AppComponent {
  title = 'TodoApp';
  work: string = "";
  updateWork: string = "";
  workList: string[] = ["Deneme1", "Deneme2","Deneme3","Deneme4"];
  isUpdateFormActive : boolean = false;
  index : number = 0;

  Kaydet() {
    debugger;
    this.workList.push(this.work);
    this.work = "";
  }

  Remove(index: number) {
    let result: boolean = confirm("Kaydı Silmek İstiyor Musunuz?");
    if (result) {
      this.workList.splice(index, 1);
    }

  }


  Get(index : number ) {
    this.isUpdateFormActive = true;
    this.index = index;
  }

  Update(){
    this.workList[this.index] = this.updateWork;
    this.Cancel();
  }

  Cancel(){
    this.isUpdateFormActive = false;
  }
 
}
