import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  // miFormulario: FormGroup = new FormGroup({
    // 'nombre': new FormControl('RTX 4080ti')
  // })

  constructor( private fb: FormBuilder ) { }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4090ti'],
    precio: [0],
    existencias: [0]
})
  
  

}
