import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from '../../service/authorization.service';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {UserInformation} from '../../models/userInformation';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    './profile-page.component.scss',
    '../../../../node_modules/animate.css/animate.min.css',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ],
  providers: [AuthorizationService]
})
export class ProfilePageComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  currentUser = new UserInformation();
  id: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthorizationService,
    public dialog: MatDialog,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) {
    {
      this.id = localStorage.getItem('uID');
    }
  }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      // @ts-ignore
      this.currentUser.firstName = localStorage.getItem('firstName');
      this.currentUser.surName = localStorage.getItem('surName');
      this.currentUser.userName = localStorage.getItem('username');
      this.currentUser.email = localStorage.getItem('email');
    } else {
      this.authService.getUserProfile(localStorage.getItem('uID'))
        .subscribe(
          res => {
            this.currentUser.firstName = (res.firstName);
            this.currentUser.surName = res.surName;
            this.currentUser.userName = res.userName;
            this.currentUser.email = res.email;
            this.currentUser.subscription = res.subscription;
            this.currentUser.paymentMethod = res.paymentMethod;
          }
        );
    }
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/client-log-in']);
    }
  }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  // Settings Icon Functionality
  navigateToEditProfile() {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/edit-profile']);
    } else {
      this._snackBar.open('Create a personal account to access this feature.', '', {
        duration: 3000,
      });
    }
  }
}
