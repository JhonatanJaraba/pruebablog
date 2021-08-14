import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContenedorCardsComponent } from './contenedor-cards/contenedor-cards.component';
import { ContenidoCardComponent } from './contenido-card/contenido-card.component';
import { FooterComponent } from './footer/footer.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardService } from './guards/prod-guard.service';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeContenidoComponent } from './home-contenido/home-contenido.component';
import { IndexComponent } from './index/index.component';
import { IngresoBlogComponent } from './ingreso-blog/ingreso-blog.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerBlogComponent } from './ver-blog/ver-blog.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: '/blogs/form', component: IngresoBlogComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
