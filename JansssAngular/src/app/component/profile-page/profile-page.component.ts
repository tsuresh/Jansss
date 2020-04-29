import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../service/auth.service';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {UserInformation} from '../../models/userInformation';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    './profile-page.component.scss',
    '../../../../node_modules/animate.css/animate.min.css',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ],
  providers: [AuthService]
})
export class ProfilePageComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  currentUser = new UserInformation();
  id: any;
  constructor(private router: Router, private http: HttpClient, private authService: AuthService, public dialog: MatDialog) {
    {
      this.id = localStorage.getItem('uID');
    }
  }
  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  // Settings Icon Functionality
  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  ngOnInit() {
    this.authService.getUserProfile(this.id).subscribe((res) => {
      // @ts-ignore
      this.currentUser = res;
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/client-log-in']);
    }
  }
}
