import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {
  /* FORMA "TRADICIONAL"
  public myForm = new FormGroup({
    favoriteGames: new FormArray([])
  });*/
  constructor (private fb: FormBuilder ){}

  //Forma más practica de crear un formulario usando el FormBuilder
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators. required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required );

  onSubmit(): void{
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
  }

  onDeleteFavorite(index: number): void{
    this.favoriteGames.removeAt(index);
  }

  onAddToFavorites():void{
    if (this.newFavorite.invalid) return;
    const newGame = this.fb.control(this.newFavorite.value, Validators.required);

   this.favoriteGames.push(newGame);
   this.newFavorite.reset()
    
  }

  
  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  //VALIDACIONES DINAMICAS

  isValidField( field: string ): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors && formArray.controls[index].errors;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field])
      return null;

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





}

