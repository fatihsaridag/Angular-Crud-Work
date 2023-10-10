import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { RoutingDirectiveComponent } from './routing-directive/routing-directive.component';
import { ValidationDirectiveComponent } from './validation-directive/validation-directive.component';
import { RenklendirDirective } from 'src/app/Directives/renklendir.directive';
import { MyRoutingDirective } from 'src/app/Directives/my-routing.directive';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { ValidDirective } from 'src/app/Directives/valid.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';



@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    RoutingDirectiveComponent,
    ValidationDirectiveComponent,
    RenklendirDirective,
    MyRoutingDirective,
    ValidDirective,
    C1Component,
    C2Component,
    C3Component,
    StructuralDirectiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModuleModule { }
