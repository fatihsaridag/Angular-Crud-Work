import { Injectable } from "@angular/core";



@Injectable({providedIn:'root'})
export class PersonalService {

    name : String = "deneme"
    add(){
        return this.name = "Deneme sürümü"
    }

    Update(){
        
    }

    Get(){
        
    }
}