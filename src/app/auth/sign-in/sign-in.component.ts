import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;
  signInForm: FormGroup;
  signInData: IUser;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  signIn(): void {
    this.signInData = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }
    this.authService.signIn(this.signInData)
  }

}
