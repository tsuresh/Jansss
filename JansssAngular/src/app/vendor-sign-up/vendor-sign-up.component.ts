import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.scss']
})
export class VendorSignUpComponent implements OnInit {

  registered = false;
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  // Validator function for username
  invalidUsername() {
    return(this.submitted && this.form.controls.username.errors != null);
  }

  // Validator function for password
  invalidPassword() {
    return(this.submitted && this.form.controls.password.errors != null);
  }

  // Validator function for confirm password
  invalidConfirmPassword() {
    return(this.submitted && this.form.controls.confirmPassword.errors != null);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      this.registered = true;
    }
  }
}
