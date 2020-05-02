import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {CampaignModel} from '../../models/campaignModel';


@Component({
  selector: 'app-select-campaign',
  templateUrl: './select-campaign.component.html',
  styleUrls: [
    './select-campaign.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class SelectCampaignComponent implements OnInit {
  campaign = new CampaignModel();
  data: any;

  constructor(private router: Router) { }

  // Next Button Functionality
  navigateToPayment() {
    localStorage.removeItem('campaign');
    this.router.navigate(['/payment']);
  }

  ngOnInit() {
    $('#disableItem1').removeClass('disabled');

    this.data = JSON.parse(localStorage.getItem('campaign'));
    this.campaign.plan = this.data.plan;
    this.campaign.method = this.data.methods[0];
  }
}
