import { Component, OnInit } from '@angular/core';
import { FilmService } from "../../services/film.service";
import { first } from "rxjs/operators";
import { IFilm } from "../../interfaces/film.interface";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private filmService: FilmService
  ) {
  }

  film: any;
  filmList: IFilm[] | undefined;

  ngOnInit(): void {
    const id = '61f812ee4d85c7cdb737c7eb'
    this.openSelectedFilm(id)
    this.getFilms();
  }

  getFilms() {
    this.filmService.getFilms().subscribe(filmsData => this.filmList = filmsData)
  }

  openSelectedFilm(id: string): void {
    this.filmService.getFilmById(id)
      .pipe(first())
      .subscribe(film => this.film = film)
  }
}
