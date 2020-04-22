import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent implements OnInit {

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

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
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
