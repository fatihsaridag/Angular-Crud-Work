import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModuleModule } from './Components/directives-module/directives-module.module';
import { SimpleIfDirective } from './Directives/simple-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
