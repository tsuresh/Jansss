import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {CustomValidators} from '../../validator/custom-validators';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit {
  public frmSignup: FormGroup;
  registered = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.frmSignup = this.createSignupForm();
  }
  matcher = new MyErrorStateMatcher();


  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: [
          null,
          Validators.compose([Validators.required])],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          // tslint:disable-next-line:adjacent-overload-signatures
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
    // Hide and show criteria on key entry
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
