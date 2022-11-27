import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { KeypadComponent } from './keypad/keypad.component';
import { UpperScreenComponent } from './upper-screen/upper-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    KeypadComponent,
    UpperScreenComponent
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
