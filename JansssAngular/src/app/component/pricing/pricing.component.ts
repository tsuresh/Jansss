import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SubscriptionComponent} from '../subscription/subscription.component';
import {AuthorizationService} from '../../service/authorization.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthInterceptor} from '../../interceptor/auth-interceptor';
import {FormControl, Validators} from '@angular/forms';

export interface DialogData {
  cvv: any;
  cardNo: any;
  exDate: any;
  address: any;
  payMethod: any;
  package: any;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  providers: [AuthorizationService]
})

export class PricingComponent implements OnInit {
  cvv: any;
  cardNo: any;
  exDate: any;
  address: any;
  payMethod: any;
  package: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthorizationService,
    private snackBar: MatSnackBar,
  ) { }

  openDialog(): void {
    // If signed up or logged in direct to subscription page
    if (this.authService.isLoggedIn()) {
      const dialogRef = this.dialog.open(SubscriptionComponent, {
        width: '500px',
        height: '800px',
        data: {
          cardNo: this.cardNo,
          cvv: this.cvv,
          exDate: this.exDate,
          address: this.address,
          payMethod: this.payMethod,
          package: this.package,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    } else {
      this.snackBar.open('Sign in to continue', '', {duration: 3000});
      this.router.navigate(['/client-sign-up']);
    }
  }
  ngOnInit() {
  }
}

