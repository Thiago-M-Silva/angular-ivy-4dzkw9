import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarroComponent } from './carro.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CarroComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
