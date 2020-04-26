import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../vendor-sign-up/vendor-sign-up.component';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent implements OnInit {

  form: FormGroup;
  registered = false;
  submitted = false;
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

  onSubmit() {
  //   this.submitted = true;
  //
  //   if (this.form.invalid === true) {
  //     return;
  //   } else {
  //     this.registered = true;
  //   }
  }
}
