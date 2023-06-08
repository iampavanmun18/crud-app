import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmplyoeeDashboardComponent } from './emplyoee-dashboard/emplyoee-dashboard.component';
import { AddEMplyoeeComponent } from './add-emplyoee/add-emplyoee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmplyoeeDashboardComponent,
    AddEMplyoeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
