import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar-modelos',
  templateUrl: './editar-modelos.component.html',
  styleUrls: ['./editar-modelos.component.css']
})
export class EditarModelosComponent {

  constructor(private router:Router, private servicio:ServiceService){}
  //declarar la variable tipo objeto
  listarModelos:Modelos[];
  modelo:Modelos= new Modelos();
  listarMarcas:Marcas[];
 

  //se ejecuta al momento de cargar el componente
 
  ngOnInit(){
    this.servicio.listarM().subscribe(data=>{
      this.listarMarcas=data;
    })
    this.buscar();
  }
  buscar(){
    //recibir el id para buscar
    let id=localStorage.getItem("id");
    this.modelo.id=Number(id);
  //consumir el servicio buscar 

  this.servicio.buscarMod(this.modelo).subscribe(data=>{
    this.modelo=data;
    console.log(data);
  })
  
  
  }

  editar(){
  //editar el registro
  this.servicio.editarMod(this.modelo).subscribe(data=>{
    this.router.navigate(["listarModelos"]);
  })
  }

}



