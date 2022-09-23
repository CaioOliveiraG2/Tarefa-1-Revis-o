import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosCompostoComponent } from './Components/juros-composto/juros-composto.component';
import { JurosSimplesComponent } from './Components/juros-simples/juros-simples.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JurosSimplesComponent, JurosCompostoComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
