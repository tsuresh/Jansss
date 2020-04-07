import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-campaign',
  templateUrl: './select-campaign.component.html',
  styleUrls: ['./select-campaign.component.scss']
})
export class SelectCampaignComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit() {
    if (this.router.url === '/campaign') {
      // tslint:disable-next-line:only-arrow-functions
      window.onscroll = function() {
        if (document.documentElement.scrollTop >= 0) {
          document.getElementById('navbar').style.visibility = 'visible';
        }
      };
    }
  }

}
