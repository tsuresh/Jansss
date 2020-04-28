import { Injectable } from '@angular/core';
import {UserInformation} from '../models/userInformation';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  signUpUser(userName, email, password) {
    const user = new UserInformation();
    return this.http.post('https://jansss.herokuapp.com/auth/user/signup', user);
  }
}
