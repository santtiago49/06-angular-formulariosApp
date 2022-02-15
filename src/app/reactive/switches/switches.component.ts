import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{
  
  
  miFormulario: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false , Validators.requiredTrue]
  }) 

  persona = {
    genero: null,
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({ 
      ...this.persona,
      condiciones: false 
    });

    this.miFormulario.valueChanges
      .subscribe( ({ condiciones, ...rest }) => {
        this.persona = rest
      })

  }

  campoValido(campo: string){1
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar(){

    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue
    console.log(formValue);

  }

 

}
