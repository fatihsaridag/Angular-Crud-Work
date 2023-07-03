import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modelDrivenForms';
  frm : FormGroup;

  constructor(private formBuilder  : FormBuilder){
    this.frm  = formBuilder.group({
        firstName : ["" , [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        lastName : ["",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        phoneNumber  : ["" , [Validators.required , Validators.maxLength(10)]],
        address : formBuilder.group({
            country : [""],
            city : [""],
            address : [""],
        })
    });
  }


  get firstName(){
    return this.frm.get("firstName");
  }

  
  get lastName(){
    return this.frm.get("lastName");
  }

  get phoneNumber(){
    return this.frm.get("phoneNumber");
  }


  onSubmit(data : {firstName : string , lastName : string , phoneNumber : number , address : []} )
  {
      console.log(this.frm.valid)
      console.log(data);
  }
}
