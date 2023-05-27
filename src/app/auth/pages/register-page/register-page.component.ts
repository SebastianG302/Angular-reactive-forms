import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [EmailValidator]],
    username: ['', [Validators.required, cantBeStrider]], //solo se pasa la referencia a la funcion para que angular la ejecute
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService){}

  isValidField(field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }
  onSubmit(){}
}
