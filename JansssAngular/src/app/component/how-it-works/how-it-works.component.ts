import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  providers: [AuthService]
})
export class HowItWorksComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      $('.sign-in-to-continue').css({
        display: 'none',
      });
    } else {
      $('.sign-in-to-continue').css({
        display: 'block',
      });
    }
  }

}
