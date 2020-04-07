import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/pricing') {
      // tslint:disable-next-line:only-arrow-functions
        window.onscroll = function() {
          if (document.documentElement.scrollTop >= 0) {
            document.getElementById('navbar').style.visibility = 'visible';
          }
        };
    }
  }
}

