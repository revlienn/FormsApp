import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy{
   preload(route: Route, load: () => Observable<any>): Observable<any> {
      //console.log('Preload check for:', route.path, 'preload flag:', route.data?.['preload']);
      return route.data?.['preload']?load():of(null);
   }
}