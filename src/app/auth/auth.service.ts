import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) {
  }

  signIn(signInData: IUser) {
    return this.http.post('http://localhost:3005/auth/login', { signInData });
  }

  registration() {

  }
}
