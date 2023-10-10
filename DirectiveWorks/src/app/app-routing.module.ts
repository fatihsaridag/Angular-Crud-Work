import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './Components/directives-module/attribute-directive/attribute-directive.component';
import { RoutingDirectiveComponent } from './Components/directives-module/routing-directive/routing-directive.component';
import { ValidationDirectiveComponent } from './Components/directives-module/validation-directive/validation-directive.component';
import { C1Component } from './Components/directives-module/c1/c1.component';
import { C2Component } from './Components/directives-module/c2/c2.component';
import { C3Component } from './Components/directives-module/c3/c3.component';
import { StructuralDirectiveComponent } from './Components/directives-module/structural-directive/structural-directive.component';

const routes: Routes = [
    {path: 'attribute-directive', component: AttributeDirectiveComponent },
    {path: 'routing-directive', component: RoutingDirectiveComponent },
    {path: 'validation-directive', component: ValidationDirectiveComponent },
    {path: 'validation-directive', component: ValidationDirectiveComponent },
    {path: 'structural-directive', component: StructuralDirectiveComponent },
    {path: 'c1', component: C1Component },
    {path: 'c2', component: C2Component },
    {path: 'c3', component: C3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
