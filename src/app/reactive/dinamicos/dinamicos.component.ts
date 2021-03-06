import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength( 3 ) ] ],
    favoritos: this.fb.array([
      ['Metal Gear'],
      ['Death Stranding']
    ], Validators.required)
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required )

  agregarFavorito() {
    if (this.nuevoFavorito.invalid){ return; }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  eliminarFavorito(i: number) {
    this.favoritosArr.removeAt(i);
  }  

  constructor( private fb: FormBuilder ) { }

  campoValido(campo: string){1
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }


  guardar() {
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()

  }

}
