import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-client-log-in',
  templateUrl: './client-log-in.component.html',
  styleUrls: ['./client-log-in.component.scss']
})
export class ClientLogInComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  registered = false;
  submitted = false;
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }
  invalidPassword() {
    return (this.submitted && this.userForm.controls.password.errors != null);
  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.registered = true;
    }
  }
}
