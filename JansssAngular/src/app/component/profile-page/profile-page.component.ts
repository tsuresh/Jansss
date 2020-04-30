import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthorizationService} from '../../service/authorization.service';
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
  providers: [AuthorizationService]
})
export class ProfilePageComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  currentUser = new UserInformation();
  id: any;
  constructor(private router: Router, private http: HttpClient, private authService: AuthorizationService, public dialog: MatDialog) {
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
    if (localStorage.getItem('username')) {
      this.currentUser.userName = localStorage.getItem('username');
    } else {
      this.authService.getUserProfile(localStorage.getItem('uID'))
        .subscribe(
          res => { this.currentUser.userName = res.userName; }
        );
    }
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/client-log-in']);
    }
  }
}
