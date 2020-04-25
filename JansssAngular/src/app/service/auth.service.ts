import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs';
import {AuthInterceptor} from '../interceptor/auth-interceptor';



@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string ) {
    return this.http.post('https://jansss.herokuapp.com/auth/user/signin', {email, password})
      .do(res => this.setSession)
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    // storing the JWT directly in Local Storage
    localStorage.setItem('id_token', authResult.idToken);
    // calculate the expiration timestamp
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
