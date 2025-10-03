import { Injectable, signal } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService {
  public isLoggedIn=signal<boolean>(false);

  logIn(){
    this.isLoggedIn.set(true);
    return of(true).pipe(delay(300));
  }
  logOut(){
    this.isLoggedIn.set(false)
    return of(true).pipe(delay(300));
  }
}
