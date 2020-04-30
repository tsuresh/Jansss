// @ts-ignore
import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationService {
  url;
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string ) {
    return this.http.post('https://api.jansss.live/auth/user/signin', {email, password})
      .subscribe((res: any) => {
        const expiresAt = moment().add(res.expiresIn, 'second');
        // storing the JWT directly in Local Storage
        localStorage.setItem('token', res.token);
        // calculate the expiration timestamp
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem('uID', res._id);
        console.log('User is logged in.');
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('uID');
    // details for facebook being removed from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('email');
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

  // Get user profile
  getUserProfile(id) {
    const api = 'https://api.jansss.live/users/match/' + id;
    return this.http.get<any>(api);
  }
}
