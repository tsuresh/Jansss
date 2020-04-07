import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/client-sign-up') {
      // tslint:disable-next-line:only-arrow-functions
      window.onscroll = function() {
        if (document.documentElement.scrollTop >= 0) {
          document.getElementById('navbar').style.visibility = 'visible';
        }
      };
    }
  }
}
