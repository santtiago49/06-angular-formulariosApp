import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO: temporal
  nombreApellidoPattern: string  = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.emailPattern ) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Santiago Gomez',
      email: 'test1@test1.com'
    })
    
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
