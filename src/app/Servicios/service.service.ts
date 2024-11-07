import { Marcas } from './../Model/Marcas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelos } from '../Model/Modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // SE AGREGA PARAMETRO PARA LAS PETICIONES UTLIZANDO EL 
 //PROTOCOLO HTTP
 constructor(private http:HttpClient) {} 

 urlListar='http://localhost:9000/MarcasWs/listar'
 urlGuardar='http://localhost:9000/MarcasWs/guardar'
 urlBuscar='http://localhost:9000/MarcasWs/buscar'
 urlEditar='http://localhost:9000/MarcasWs/editar'
urlEliminar='http://localhost:9000/MarcasWs/eliminar'


  //metodos para las varables de los recursos
  listarM(){
    return this.http.get<Marcas[]>(this.urlListar);
  }
  
  //Metodo cuando si se ocupan validaciones ..... responEntity
  //guardarM(marca:Marca){
  //return this.http(this.urlGuadada, jugador,{ResponseType: 'text'})
  //}



  guardarM(marca:Marcas){
    return this.http.post(this.urlGuardar,marca,{responseType:'text'});
  }
  
  buscarM(marca:Marcas){
    return this.http.post<Marcas>(this.urlBuscar,marca);
  }
  
  editarM(marca:Marcas){
    return this.http.post<Marcas>(this.urlEditar,marca);
  }
  
  eliminarM(marca:Marcas){
    return this.http.post(this.urlEliminar,marca,{responseType:'text'});
  }

  urlListarModelos='http://localhost:9000/ModelosWs/listar'
  urlGuardarModelos='http://localhost:9000/ModelosWs/guardar'
  urlEliminarModelos='http://localhost:9000/ModelosWs/eliminar'
  urlBuscarModelos='http://localhost:9000/ModelosWs/buscar'
  urlEditarModelos='http://localhost:9000/ModelosWs/editar'
 
  listarMod(){
  return this.http.get<Modelos[]>(this.urlListarModelos);
 }
 guardarMod(modelo:Modelos){
  return this.http.post(this.urlGuardarModelos,modelo,{responseType:"text"})
  }
eliminarMod(modelo:Modelos){
  return this.http.post(this.urlEliminarModelos,modelo,{responseType:"text"});
  }

buscarMod(modelo:Modelos){
  return this.http.post<Modelos>(this.urlBuscarModelos,modelo);
  }

editarMod(modelo:Modelos){
  return this.http.post(this.urlEditarModelos,modelo,{responseType:"text"});
  }

  

}







