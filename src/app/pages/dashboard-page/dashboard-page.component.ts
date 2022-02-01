import { Component, OnInit } from '@angular/core';
import { FilmService } from "../../services/film.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{

  constructor(
    private filmService: FilmService
  ){}
  film:any

  ngOnInit(): void {
    const id = '61f812ee4d85c7cdb737c7eb'
  this.openSelectedFilm(id)
  }

  getFilms(){
    this.filmService.getFilms().subscribe(res=> console.log('Response', res))
  }

  openSelectedFilm(id: string): void {
    this.filmService.getFilmById(id)
      .pipe(first())
      .subscribe(film => this.film = film)
  }
}
