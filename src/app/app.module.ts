import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module'; // Certifique-se de importar o módulo FormModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormModule,HttpClientModule], // Certifique-se de que o FormModule seja importado corretamente
  bootstrap: [AppComponent],
})
export class AppModule {}
