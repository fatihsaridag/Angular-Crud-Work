import { Directive, ElementRef, Host, HostListener, Input } from "@angular/core";


@Directive({
    selector : "[appRenklendir]"
})


export class RenklendirDirective{

    //Yakalayacağımız değişkenin adı mutlaka directive adı olması lazım.
    @Input() appRenklendir : string ="";

    //Başka isimli değer de atabiliriz. ama directive zorunlu

    @Input() test : string = "0";


    constructor(private _el : ElementRef){
           this._el.nativeElement.className= "form-control";
    }

    @HostListener("mouseenter") mouseEnter(){
        this._el.nativeElement.style.backgroundColor = this.appRenklendir;
        console.log(this.test);
    }

    @HostListener("mouseleave") mouseLeave(){
        this._el.nativeElement.style.backgroundColor = "White";
    }
}