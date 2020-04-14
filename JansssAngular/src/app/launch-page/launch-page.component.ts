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
  }

}
