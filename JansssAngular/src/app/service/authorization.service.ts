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
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (localStorage.getItem('expires_at')) {
      localStorage.removeItem('expires_at');
    }
    if (localStorage.getItem('uID')) {
      localStorage.removeItem('uID');
    }
    // details for facebook and google being removed from local storage
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
    }
    if (localStorage.getItem('email')) {
      localStorage.removeItem('email');
    }
    if (localStorage.getItem('firstName')) {
      localStorage.removeItem('firstName');
    }
    if (localStorage.getItem('surName')) {
      localStorage.removeItem('surName');
    }
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

  // Update user profile
  updateUserProfile(id, data) {
    const api = 'https://api.jansss.live/users/match/update/' + id;
    return this.http.put(api, data);
  }

  // Send message
  sendMessage(message) {
    const api = 'https://api.jansss.live/support/sendticket';
    return this.http.post(api, message);
  }

  // Get campaign
  getCampaign() {
    const api = 'https://api.jansss.live/generator/plan';
    return this.http.get(api);
  }
}
