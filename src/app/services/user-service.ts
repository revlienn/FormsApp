import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MOCK_USERS } from '../data/mockUsername';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkUsername(username:string):Observable<boolean>{
    return of(MOCK_USERS.includes(username.toLowerCase())).pipe(delay(500))
  }
  
}
