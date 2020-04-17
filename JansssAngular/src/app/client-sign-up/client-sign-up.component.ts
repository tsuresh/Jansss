import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ClientService} from '../client.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit {
  // email = new FormControl('');
  // password = new FormControl('');
  registered = false;
  submitted = false;
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }

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
      this.clientService.signUpUser(this.userForm.controls.email.value , this.userForm.controls.password.value).subscribe(
        res => {
          alert('Successfully signed up');
        },
        err => {
          alert('An error occurred. ' + JSON.stringify(err) + this.userForm.controls.email.value + this.userForm.controls.password.value);
        }
      );
      this.registered = true;
    }
  }
}
