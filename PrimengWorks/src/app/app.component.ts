import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Message , MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [MessageService]
})
export class AppComponent implements OnInit {
  title = 'PrimengWorks';
  value : string;
  products : [];
  messages : Message[] = [];
  messages2 : Message[] = [];

  userForm = this.formBuilder.group({
    EmployeeFirstName : ['',Validators.required],
    EmployeeLastName : ['',Validators.required],
    EmployeeJob: ['',Validators.required],
    EmployeeAddress: this.formBuilder.group({
      street : [''],
      postCode : ['']
    })
  })

  constructor(private formBuilder : FormBuilder,private _productService : ProductService, private messageService : MessageService){
  }
 
  public fruits: Array<any> = [
    { title: "Banana", color: "Yellow" },
    { title: "Apple", color: "Red" },
    { title: "Guava", color: "Green" },
    { title: "Strawberry", color: "Red" }
  ];

  ngOnInit(): void {
    this.getUsersList();
    this.messages = [
      {severity : 'success', summary: 'Heading', detail : 'More details...'},
      {severity : 'warn', summary: 'Heading', detail : 'More details...'},
      {severity : 'info', summary: 'Heading', detail : 'More details...'},
      {severity : 'error', summary: 'Heading', detail : 'More details...',icon:'pi pi-spin pi-spinner'},
    ]
  }

  getUsersList(){
    this._productService.getProductList().subscribe(
      response => this.products = response
    )
  }

  onSubmit()
 {
    console.log(this.userForm.value);
 }

 addMessages(){
  this.messageService.add(  
    {severity: 'success', summary:'Heading' , detail: 'More Details....'},
  );

 }

 clearMessages(){
  this.messageService.clear();
 }


 showToastr()
 {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' , life:1000 });
 }

 showInfo(){
  this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Message Content' , life:1000 });

 }

 showWarn(){
  this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Message Content' , life:1000});

 }


 showError(){
  this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Message Content',life:1000 });

 }

}
