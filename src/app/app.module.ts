import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerBlogComponent } from './ver-blog/ver-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IngresoBlogComponent } from './ingreso-blog/ingreso-blog.component';
import { ContenedorCardsComponent } from './contenedor-cards/contenedor-cards.component';
import { ContenidoCardComponent } from './contenido-card/contenido-card.component';
import { MenuComponent } from './menu/menu.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeContenidoComponent } from './home-contenido/home-contenido.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginGuard } from './guards/login.guard';
import { IndexComponent } from './index/index.component';
import { ProdGuardService } from './guards/prod-guard.service';
// METODO PARA SCRIPT   
import { CargarScriptsService } from "./cargar-scripts.service"
// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    VerBlogComponent,
    IngresoBlogComponent,
    ContenedorCardsComponent,
    ContenidoCardComponent,
    MenuComponent,
    CarruselComponent,
    HomeBlogComponent,
    HomeContenidoComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
