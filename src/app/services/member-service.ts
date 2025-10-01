import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MEMBERSHIP_TYPES } from '../data/membership';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  getMemberships():Observable<string[]>{
    return of(MEMBERSHIP_TYPES).pipe(delay(500));
  }
}
