import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {MatDialog} from '@angular/material';
import {SubscriptionComponent} from '../subscription/subscription.component';
import {AuthService} from '../../service/auth.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthInterceptor} from '../../interceptor/auth-interceptor';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  providers: [AuthService]
})
export class PricingComponent implements OnInit {
  cvv: string;
  cardNumber: string;
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService) { }

  navigateToClientSignUp() {
    // If signed up or logged in direct to subscription page
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/subscription']);
    // Else direct to Sign up Page
    } else {
      this.router.navigate(['/client-sign-up']);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SubscriptionComponent, {
      width: '500px',
      height: '500px',
      data: {cardNumber: this.cardNumber, cvv: this.cvv}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit() {
  }
}

