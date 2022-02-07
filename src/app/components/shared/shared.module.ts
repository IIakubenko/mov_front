import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
