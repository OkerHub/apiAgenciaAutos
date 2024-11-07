import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  //Aqui va la logica del componente

  //DEclarar el constructor en el que vamos a inyectar a router y servicio
  constructor(private router:Router, private servicio:ServiceService){}

  //Declarar variable de tipo coleccion
  listasMarcas:Marcas[];

  //Todo lo que pongas aqui se ejecuta al cargar el componente
  ngOnInit():void{

    //recibir la respuesta de server----- al consumir el servicio
    this.servicio.listarM().subscribe(data=>{
      console.log(data);
      this.listasMarcas=data;
    });
  }
  
  //enviar id y mostrar componente para editar
  abrirCompEditar(marca:Marcas){
    localStorage.setItem("id",marca.id.toString());
    this.router.navigate(["editar"]);
  }
  
  abrirCompEliminar(marca:Marcas){
    localStorage.setItem("id",marca.id.toString());
    this.router.navigate(["eliminar"]);
  }

  abrirComEditarEliminarId(marca:Marcas){
    localStorage.setItem("id",marca.id.toString());
  
      this.router.navigate(["eliminar"]);
    }
  

  }
