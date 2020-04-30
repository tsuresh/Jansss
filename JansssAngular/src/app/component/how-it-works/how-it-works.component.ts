import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AuthorizationService} from '../../service/authorization.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  providers: [AuthorizationService]
})
export class HowItWorksComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

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
