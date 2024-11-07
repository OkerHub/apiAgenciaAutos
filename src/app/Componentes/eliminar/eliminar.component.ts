import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  constructor(private rouuter:Router, private servicio:ServiceService){}

  //declarar objeto
  marca: Marcas=new Marcas();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    //recibir el id para buscar
    let id=localStorage.getItem("id");
    this.marca.id=Number(id);
  //consumir el servicio buscar 

  this.servicio.buscarM(this.marca).subscribe(data=>{
    this.marca=data;
    console.log(data);
  })
  
  
  }
  //declarar metodo para guardar
  eliminar() {
    if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
        this.servicio.eliminarM(this.marca).subscribe(data => {
            alert("Elemento eliminado con éxito.");
            this.rouuter.navigate(["listar"]);
        });
    }
}  


}
