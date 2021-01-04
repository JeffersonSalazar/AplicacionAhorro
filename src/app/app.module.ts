import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';

// Componentes de la aplicacion
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';

@NgModule({
  declarations: [ AppComponent, MainComponent ],

  imports: [ BrowserModule, AppRoutingModule, FormsModule ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {}
