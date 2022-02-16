import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, Validator, FormControl } from '@angular/forms';

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
    email: ['', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
    username: ['', [ Validators.required, this.noPuedeSerSanti ] ]
  })

  noPuedeSerSanti(control: FormControl){
    const valor: string = control.value?.trim().toLowerCase()

    if( valor === 'santi'){
      return {
        esSanti: true
      }
    } 
    else {
      return null
    }

  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Santiago Gomez',
      email: 'test1@test1.com',
      username: 'santiegomez1'
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
