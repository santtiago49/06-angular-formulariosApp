import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(miFormulario: NgForm ){
    console.log( miFormulario.controls.nombre.value );

    miFormulario.resetForm({
      nombre: ''
    })

  }


}
