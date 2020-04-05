import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    './profile-page.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})
export class ProfilePageComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  ngOnInit() {
  }

}
