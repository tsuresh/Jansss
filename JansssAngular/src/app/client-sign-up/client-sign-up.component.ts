// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import {ClientService} from '../client.service';
// import {HttpClient} from '@angular/common/http';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-client-sign-up',
//   templateUrl: './client-sign-up.component.html',
//   styleUrls: ['./client-sign-up.component.scss']
// })
// export class ClientSignUpComponent implements OnInit {
//   // email = new FormControl('');
//   // password = new FormControl('');
//   registered = false;
//   submitted = false;
//   userForm: FormGroup;
// tslint:disable-next-line:max-line-length
//   constructor(private formBuilder: FormBuilder, private clientService: ClientService, private http: HttpClient, private router: Router) { }
//
//   invalidEmail() {
//     return (this.submitted && this.userForm.controls.email.errors != null);
//   }
//   invalidPassword() {
//     return (this.submitted && this.userForm.controls.password.errors != null);
//   }
//   ngOnInit() {
//     this.userForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
// tslint:disable-next-line:max-line-length
//       password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
//     });
//   }
//
//   onSubmit() {
//     this.submitted = true;
//
//     if (this.userForm.invalid === true) {
//       return;
//     } else {
//       const data: any = Object.assign(this.userForm.value);
//       // tslint:disable-next-line:no-shadowed-variable
//       this.http.post('https://jansss.herokuapp.com/auth/user/signup', data).subscribe(( data: any) => {
//         alert('Sign up was successful');
//       }, error => {
//         alert('An error occurred. ' + JSON.stringify(error.error));
//       });
//       this.registered = true;
//     }
//   }
// }
//
// // this.clientService.signUpUser(this.userForm.controls.email.value , this.userForm.controls.password.value).subscribe(
// //   res => {
// //     alert('Successfully signed up');
// //   },
// //   err => {
// //     alert('An error occurred. ' + JSON.stringify(err) + this.userForm.controls.email.value + this.userForm.controls.password.value);
// //   }
// // )
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomValidators} from '../custom-validators';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit{
  public frmSignup: FormGroup;
  registered = false;
  submitted = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.frmSignup = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

    onSubmit() {
    this.submitted = true;

    if (this.frmSignup.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.frmSignup.value);
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('https://jansss.herokuapp.com/auth/user/signup', data).subscribe(( data: any) => {
        alert('Sign up was successful');
      }, error => {
        alert('An error occurred. ' + JSON.stringify(error.error));
      });
      this.registered = true;
    }
  }

  ngOnInit() {
    $('#password').keyup(function() {
      // @ts-ignore
      if ($(this).val().length > 0) {
        // @ts-ignore
        $('.criteriaPassword').css({
          display: 'block'
        });
        $('.confirmPassword').css({
          display: 'block'
        });
      } else {
        $('.criteriaPassword').css({
          display: 'none'
        });
        $('.confirmPassword').css({
          display: 'none'
        });
      }
    });
    $('#confirmPassword').keyup(function() {
      // @ts-ignore
      if ($(this).val().length > 0) {
        // @ts-ignore
        $('.criteriaConfirm').css({
          display: 'block'
        });
      } else {
        $('.criteriaConfirm').css({
          display: 'none'
        });
      }
    });
    $('#email').keyup(function() {
      // @ts-ignore
      if ($(this).val().length > 0) {
        // @ts-ignore
        $('.criteriaEmail').css({
          display: 'block'
        });
      } else {
        $('.criteriaEmail').css({
          display: 'none'
        });
      }
    });
  }
}
