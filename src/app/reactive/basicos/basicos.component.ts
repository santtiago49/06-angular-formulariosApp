import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
    // 'nombre': new FormControl('RTX 4080ti')
  // })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
      this.miFormulario.reset({
        nombre     : 'Ades manzana',
        precio     : 180
      })
  }
  
  miFormulario: FormGroup = this.fb.group({
    nombre     : [ ,[ Validators.required, Validators.minLength(3) ]],
    precio     : [ ,[ Validators.min(5), Validators.required ]],
    existencias: [ ,[ Validators.min(10), Validators.required ]]
})

campoEsvalido(campo: string){
  return this.miFormulario.controls[campo].errors &&
         this.miFormulario.controls[campo].touched
}
 

guardar() {

  if ( this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched()
    return
  }

  
  console.log(this.miFormulario.value)
  this.miFormulario.reset()


}
  

}
