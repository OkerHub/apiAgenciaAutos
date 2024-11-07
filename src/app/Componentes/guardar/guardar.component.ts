import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  //Declarar Servicio
  marca:Marcas = new Marcas();


  //metodo guardar
  guardar(){
    this.servicio.guardarM(this.marca).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }
}