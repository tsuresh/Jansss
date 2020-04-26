import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vendor-hub-home-page',
  templateUrl: './vendor-hub-home-page.component.html',
  styleUrls: [
    './vendor-hub-home-page.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class VendorHubHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Button Functionality
  navigateToSignUp() {
    this.router.navigate(['/vendor-sign-up']);
  }
  navigateVendorEditProfile() {
    this.router.navigate(['/vendor-edit-profile']);
  }
}
