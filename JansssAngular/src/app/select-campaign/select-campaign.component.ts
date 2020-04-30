import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-campaign',
  templateUrl: './select-campaign.component.html',
  styleUrls: [
    './select-campaign.component.scss',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class SelectCampaignComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit() {
  }

}