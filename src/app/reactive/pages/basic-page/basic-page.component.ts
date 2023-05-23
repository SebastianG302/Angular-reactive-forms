import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  /*PRIMERA FORMA DE CREAR FORMULARIOS REACTIVOS (SE USA MÁS CODIGO)
  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [], []),
    price: new FormControl('', [], []),
    inStorage: new FormControl('', [], [])
  })*/
  constructor( private fb: FormBuilder ){}

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [, [Validators.required, Validators.min(0)]],
    inStorage: [, [Validators.required, Validators.min(0)]],
  })

  isValidField( field: string ): boolean | null{
    return this.myForm.controls[field].errors && 
           this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if ( !this.myForm.controls[field]  ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength} carateres.`
      }
    }
    return null
  }

  onSave(): void{
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    } 
    console.log(this.myForm.value);
    
    this.myForm.reset()
    
  }

}
