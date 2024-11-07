import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar-modelos',
  templateUrl: './listar-modelos.component.html',
  styleUrls: ['./listar-modelos.component.css']
})
export class ListarModelosComponent {

  constructor(private router:Router,private servicio:ServiceService){}
  modelo: Modelos=new Modelos();
  listarModelos:Modelos[];
  
  ngOnInit():void{

    //recibir la respuesta del servidor -- al consumir servicio
    this.servicio.listarMod().subscribe(data=>{
      this.listarModelos=data;
      })
    }
    eliminar(modelo:Modelos) {
      var r = confirm("¿Esta seguro de eliminar este registro?")
      if(r==true){
        this.servicio.eliminarMod(modelo).subscribe(data=>{
          this.ngOnInit();
          });
      }
  }
  abrirComMEditar(modelo:Modelos){
    //enviar el id paea poder realizaer la busqiedad
    localStorage.setItem("id",modelo.id.toString());
    this.router.navigate(["editarModelo"]);
  }  

}
