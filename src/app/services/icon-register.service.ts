import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  svgList = [
    'logo',
    'account',
    'arrow-left',
    'arrow-right',
    'home',
    'settings',
    'star',
    'tv',
    'movie'
  ]

  constructor(
     private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer) {
  }

  init(): void {
    this.svgList.forEach((item: string) => {
      this.matIconRegistry.addSvgIcon(
        item,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${ item }.svg`)
      );
    });
  }
}
