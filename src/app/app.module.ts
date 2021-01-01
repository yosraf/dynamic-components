import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComponent } from './component/dynamic/dynamic.component';
import { ListComponent } from './component/list/list.component';
import { AlertComponent } from './component/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    ListComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
