import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from '../entities/hero';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  heroes$: Observable<Hero[]> = this.http.get<Hero[]>(this.url, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).pipe(
    tap(heroes => console.table(heroes)),
    catchError(err => {
      console.log({ err });
      this.processError(err, 'Get Heroes');
      return of(err);
    })
  );


  private processError(err: any, requestName: string = 'http operation'): any {
    return (err: any): Observable<any> => {
      let snackBarRef;
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 400:
            snackBarRef = this.snackbar.open(`Incorrect Request Error for ${requestName} Request`, 'Close');
            break;

          case 404:
            snackBarRef = this.snackbar.open(`Data Not Found for ${requestName} Request`, 'Close');
            break;

          case 401:
            snackBarRef = this.snackbar.open(`Unauthorized for ${requestName} Request`, 'Close');
            break;

          case 403:
            snackBarRef = this.snackbar.open(`Forbidden for ${requestName} Request`, 'Close');
            break;

          case 500:
            snackBarRef = this.snackbar.open(`Server Error Encountered for ${requestName} Request`, 'Close');
            break;

          default:
            snackBarRef = this.snackbar.open(`Unknown Error for ${requestName} Request`, 'Close');

            break;
        }
      }
      return of(err);
    };
  }
}
