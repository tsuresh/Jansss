import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {CustomValidators} from '../../validator/custom-validators';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {ErrorStateMatcher, MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../service/authorization.service';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import * as moment from 'moment';

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
  styleUrls: ['./client-sign-up.component.scss'],
  providers: [AuthorizationService]
})
export class ClientSignUpComponent implements OnInit {
  public frmSignup: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  hide = true;
  registered = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthorizationService,
    public dialog: MatDialog,
    public authService: AuthService
  ) {
    this.frmSignup = this.createSignupForm();
  }
  matcher = new MyErrorStateMatcher();

  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        userName: [
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
      this.http.post('https://api.jansss.live/auth/user/signup', data).subscribe(( dataClient: any) => {
        this._snackBar.open('Sign up was successful!', 'Redirecting to Subscription.' , {duration: 3000});
        this.auth.login(data.email, data.password);
        this.router.navigate(['/pricing']);
      }, error => {
        this._snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
      this.registered = true;
    }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      if (this.loggedIn) {
        localStorage.setItem('username', this.user.firstName + this.user.lastName.charAt(0).toUpperCase());
        const expiresAt = moment().add(3600, 'second');
        // // calculate the expiration timestamp
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        console.log('User is logged in.');
        this.router.navigateByUrl('/pricing').then(() => {
          window.location.reload();
        });
      }
    });
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
  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  // Facebook sign up
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // Google sign up
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
}
