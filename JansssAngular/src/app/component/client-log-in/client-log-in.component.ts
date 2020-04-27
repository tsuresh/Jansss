import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import {CustomValidators} from '../../validator/custom-validators';
import {AuthService} from '../../service/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';

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
  providers: [AuthService]
})
export class ClientLogInComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  hide = true;
  frmLogIn: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.frmLogIn = this.createLogInForm();
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
  ngOnInit() {}
  login() {
    const val = this.frmLogIn.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password);
      setTimeout(() => {
        this.checklogin();
      }, 3000);

    }
  }

  checklogin() {
    if (this.authService.isLoggedIn()) {
      this.snackBar.open('Logged in successfully', '', {duration: 2000});
      this.router.navigateByUrl('/');
    } else {
      this.snackBar.open('Invalid account details', '', {duration: 2000});
    }
  }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }
}