import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-log-in',
  templateUrl: './client-log-in.component.html',
  styleUrls: ['./client-log-in.component.scss']
})
export class ClientLogInComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/client-log-in') {
      // tslint:disable-next-line:only-arrow-functions
      window.onscroll = function() {
        if (document.documentElement.scrollTop >= 0) {
          document.getElementById('navbar').style.visibility = 'visible';
        }
      };
    }
  }
}
