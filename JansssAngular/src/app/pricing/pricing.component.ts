import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToClientSignUp() {
    this.router.navigate(['/client-sign-up']);
  }
  ngOnInit() {
  }
}

