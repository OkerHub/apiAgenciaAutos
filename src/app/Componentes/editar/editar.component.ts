import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicios/service.service';
import { Marcas } from '../../Model/Marcas';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private router:Router, private servicios:ServiceService){}

  //Declarar variable de tipo objeto
  marca:Marcas = new Marcas();
  //modelo:Modelos = new Modelos();

//Se ejecuta al momento de cargar el componente
ngOnInit(){
  this.buscar();
}

buscar(){
  //Recibir el id para buscar
  let id = localStorage.getItem("id");
this.marca.id=Number(id);

  //Consumir el servicio de buscar
  this.servicios.buscarM(this.marca).subscribe(data=>{
    this.marca=data;
    console.log,(data);
  })
  
}

//editar Registro

editar(){
  //editar el registro
  this.servicios.editarM(this.marca).subscribe(data=>{
    this.router.navigate(["listar"]);
  })
  }

}
