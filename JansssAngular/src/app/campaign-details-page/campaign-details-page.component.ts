import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campaign-details-page',
  templateUrl: './campaign-details-page.component.html',
  styleUrls: [
    './campaign-details-page.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})
export class CampaignDetailsPageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
  }

}