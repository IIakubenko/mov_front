import { Component, OnInit } from '@angular/core';
import { IconRegistryService } from './services/icon-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private svgService: IconRegistryService
  ) {
  }

  ngOnInit(): void {
    this.svgService.init();
  }
}
