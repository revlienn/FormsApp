import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator():ValidatorFn{
   return(control:AbstractControl):ValidationErrors|null=>{

      const value=control.value;
      if(!value){
         return null;
      }

      const minLength:boolean= value.length>=8;
      const hasUpperCase:boolean=/[A-Z]+/.test(value);
      const hasLowerCase:boolean=/[a-z]+/.test(value);
      const hasNumeric:boolean=/[0-9+]/.test(value);

      const passwordValid:boolean = minLength&& hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid? {passwordStrength:true} : null;
   }
}