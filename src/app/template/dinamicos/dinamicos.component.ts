import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Santiago',
    favorito: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Mario Bros Super'
      }
    ]
  }



  guardar(miFormulario: NgForm ){
    console.log( miFormulario.controls.nombre.value );

    miFormulario.resetForm({
      nombre: ''
    })

  }


}
