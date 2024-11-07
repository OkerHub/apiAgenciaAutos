import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar-modelos',
  templateUrl: './guardar-modelos.component.html',
  styleUrls: ['./guardar-modelos.component.css']
})
export class GuardarModelosComponent {

  constructor(private rouuter:Router, private servicio:ServiceService){}

  modelo : Modelos =new Modelos();
  marca: Marcas= new Marcas();
  listarMarcas:Marcas[];
ngOnInit(){
  this.servicio.listarM().subscribe(data=>{
    this.listarMarcas=data;
  })
}

guardar(){
  const registroData:Modelos={
    id: this.modelo.id,
    nombre: this.modelo.nombre,
    tipo: this.modelo.tipo,
    precio: this.modelo.precio,
    fechaLanz: this.modelo.fechaLanz,
    marca:{
      id: this.marca.id,
      nombre:'',
       origen:'',
        eslogan:''
    }
  }

  console.log(JSON.stringify(registroData));

      this.servicio.guardarMod(registroData).subscribe(data=>{
        this.rouuter.navigate(["listarModelos"])
      })
    }

}
