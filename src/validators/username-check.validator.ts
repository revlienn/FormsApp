import { AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import { UserService } from "../app/services/user-service";
import { map, Observable, of } from "rxjs";

export function usernameCheck(userService:UserService):AsyncValidatorFn{
   return(control:AbstractControl):Observable<ValidationErrors|null>=>{
      if(!control.value) return of(null);

      return userService.checkUsername(control.value).pipe(
         map(isTaken=>isTaken?{usernameTaken:true}:null)
      )
   }
}