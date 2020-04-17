import { Injectable } from '@angular/core';
import {UserInformation} from './models/userInformation';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  signUpUser(email, password) {
    const user = new UserInformation(email, password);
    return this.http.post('http://localhost:3000/auth/user/signup', user);
  }
}
