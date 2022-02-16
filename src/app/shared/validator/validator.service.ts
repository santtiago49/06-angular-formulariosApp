import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string  = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerSanti(control: FormControl): ValidationErrors | null {
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

}
