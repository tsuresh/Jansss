import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import {CustomValidators} from '../../validator/custom-validators';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {AuthorizationService} from '../../service/authorization.service';
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
  selector: 'app-client-log-in',
  templateUrl: './client-log-in.component.html',
  styleUrls: ['./client-log-in.component.scss'],
  providers: [AuthorizationService]
})
export class ClientLogInComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  matcher = new MyErrorStateMatcher();
  hide = true;
  frmLogIn: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthorizationService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private authService: AuthService
  ) {
    this.frmLogIn = this.createLogInForm();
  }
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

  createLogInForm(): FormGroup {
    return this.formBuilder.group(
      {
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
        ]
      }
    );
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      if (this.loggedIn) {
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('username', this.user.firstName + this.user.lastName.charAt(0).toUpperCase());
        const expiresAt = moment().add(3600, 'second');
        // // calculate the expiration timestamp
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        console.log('User is logged in.');
        this.router.navigateByUrl('/profile').then(() => {
          window.location.reload();
        });
      }
    });
  }

  login() {
    const val = this.frmLogIn.value;

    if (val.email && val.password) {
      this.auth.login(val.email, val.password);
      setTimeout(() => {
        this.checklogin();
      }, 3000);

    }
  }

  checklogin() {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
      this.snackBar.open('Logged in successfully', '', {duration: 2000});
    } else {
      this.snackBar.open('Invalid account details', '', {duration: 2000});
    }
  }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

}


