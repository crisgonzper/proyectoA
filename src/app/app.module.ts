import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms'; 
import { Routes, RouterModule} from '@angular/router'; 
import { HttpClientModule} from '@angular/common/http';

import { ProductosService } from './servicio/productos.service';
import { UsuariosService } from './servicio/usuarios.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HijoPrComponent } from './hijo-pr/hijo-pr.component';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import { CSeccion3Component } from './c-seccion3/c-seccion3.component';
import { UsuarioComponent } from './usuario/usuario.component';





const routes: Routes =[
  {path:'', component:CSeccion2Component},
  {path:'seccion2', component: CSeccion2Component},
  {path:'seccion3', component: CSeccion3Component},
  {path:'seccion2/:nombre', component: CSeccion2Component},
  {path:'seccion3/:ciudad/:poblacion', component: CSeccion3Component},
  {path:'Usuario', component: UsuarioComponent},
  {path:'**', component:CSeccion2Component}

];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    HijoPrComponent,
    CSeccion2Component,
    CSeccion3Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    FormBuilder, 
    ProductosService,
    UsuariosService
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
