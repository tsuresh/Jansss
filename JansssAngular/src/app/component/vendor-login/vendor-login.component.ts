import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../vendor-sign-up/vendor-sign-up.component';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
// @ts-ignore
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();

  // Input Validations
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() { }
}
