import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() film: IFilm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
