import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RequestService} from './request.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApodComponent } from './apod/apod.component';
import { ContainerComponent } from './container/container.component';
import { AnydayComponent } from './anyday/anyday.component';
import { ShowapodComponent } from './showapod/showapod.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    ContainerComponent,
    AnydayComponent,
    ShowapodComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
