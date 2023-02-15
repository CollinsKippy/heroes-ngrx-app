import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from '../entities/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) { }

  heroes$: Observable<Hero[]> = this.http.get<Hero[]>(this.url, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).pipe(
    tap(heroes => console.table(heroes)),
    catchError(err => {
      console.log({ err });
      return of(err);
    })
  );
}
