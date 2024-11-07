import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronApiAgencia';

  //Constructor con un parametro
  constructor(private router:Router){}

  //Declarar un procedimiento para la navegacion al componente listar
  abrirCompListar(): void{
    this.router.navigate(["listar"]);
  }

  abrirCompGuardar(){
    this.router.navigate(["guardar"]);
  }

  abrirCompListarModelos(): void{
    this.router.navigate(["listarModelos"])
  }

  abrirCompGuardarModelos(){
    this.router.navigate(["guardarModelo"])
  }


}