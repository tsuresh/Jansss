import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})
export class LaunchPageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToCampaignDetails() {
    this.router.navigate(['/campaign-details']);
  }

  ngOnInit() {
    if (this.router.url === '/launch') {
      // tslint:disable-next-line:only-arrow-functions
      window.onscroll = function() {
        if (document.documentElement.scrollTop >= 0) {
          document.getElementById('navbar').style.visibility = 'visible';
        }
      };
    }
  }

}
