import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';


@Component({
  selector: 'app-vendor-hub-home-page',
  templateUrl: './vendor-hub-home-page.component.html',
  styleUrls: [
    './vendor-hub-home-page.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})

export class VendorHubHomePageComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

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
