import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivadoComponent } from './privado/privado.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth/'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "jquery/dist/jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap";
import { PieComponent } from './pie/pie.component'


@NgModule({
  declarations: [
    AppComponent, LoginComponent, PrivadoComponent, CabeceraComponent, PieComponent],
  imports: [
    BrowserModule, AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
