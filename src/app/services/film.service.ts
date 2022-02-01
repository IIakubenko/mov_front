import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient
  ) { }

  getFilms():Observable<any> {
    return this.http.get('http://localhost:3005/products');
  }

  getFilmById(id: string){
    return this.http.get(`http://localhost:3005/products/${id}`)
  }
}
