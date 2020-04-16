import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-option-page',
  templateUrl: './user-option-page.component.html',
  styleUrls: [
    './user-option-page.component.scss',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class UserOptionPageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToClientSignUp() {
    this.router.navigate(['/client-sign-up']);
  }

  navigateToVendorSignUp() {
    this.router.navigate(['/vendor-signup']);
  }
  ngOnInit() {
  }

}
