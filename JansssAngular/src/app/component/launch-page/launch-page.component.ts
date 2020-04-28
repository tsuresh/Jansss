import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss',
    '../../../../node_modules/animate.css/animate.min.css'
  ]
})
export class LaunchPageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToCampaignDetails() {
    this.router.navigate(['/campaign-details']);
  }

  ngOnInit() {
    $('#disableItem1').removeClass('disabled');
    $('#disableItem2').removeClass('disabled');
    $('#disableItem3').removeClass('disabled');
  }

}
