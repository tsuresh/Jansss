import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../service/authorization.service';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';
// @ts-ignore
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';

// Error when invalid control is dirty, touched, or submitted
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.scss']
})

export class VendorSignUpComponent implements OnInit {
  public form: FormGroup;
  submitted: boolean;
  registered: boolean;
  hide = true;
  matcher = new MyErrorStateMatcher();
  mTypes: string[] = ['Social Media', 'Banners', 'Event', 'Word of mouth', 'Online'];
  pTypes: string[] = ['Financial', 'Education', 'Entertainment and Events', 'Information Technology', 'Knowledge/Consulting'];
  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        busName: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required, Validators.minLength(8)],
        marketingType: ['', Validators.required],
        preferred: ['', Validators.required],
      }
    );
  }
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }
  ngOnInit() { }
  // On Submit Functionality
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.form.value);
      data.location = {lat: 0.00000, lng: 0.00000};
      data.address = 'null';
      data.phoneNumber = 'null';
      data.googleName = 'null';
      data.rating = 0;
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('https://api.jansss.live/auth/vendor/signup', data).subscribe(( data: any) => {
        this._snackBar.open('Sign up was successful.', '' , {duration: 3000});
        this.router.navigate(['/vendor-hub']);
      }, error => {
        this._snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
      this.registered = true;
    }
  }
}
