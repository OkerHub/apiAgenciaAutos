import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoruselComponent } from './corusel/corusel.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';


//Agragar esta importacion manualmente
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModelosComponent } from './Componentes/guardar-modelos/guardar-modelos.component';
import { EliminarModelosComponent } from './Componentes/eliminar-modelos/eliminar-modelos.component';
import { EditarModelosComponent } from './Componentes/editar-modelos/editar-modelos.component';


@NgModule({
  declarations: [
    AppComponent,
    CoruselComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent,
    ListarModelosComponent,
    GuardarModelosComponent,
    EliminarModelosComponent,
    EditarModelosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
