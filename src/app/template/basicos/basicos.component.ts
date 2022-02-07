import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.value < 0 &&
           this.miFormulario?.controls.producto?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls.precio?.invalid &&
           this.miFormulario?.controls.precio?.touched
  }

}
