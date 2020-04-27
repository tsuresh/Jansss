import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

interface MType {
  type: string;
}

interface PType {
  type: string;
}

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
  submitted: boolean;
  registered: boolean;
  form: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();
  mTypes: MType[] = [
    {type: 'Social Media'},
    {type: 'Banners'},
    {type: 'Event'},
    {type: 'Word of mouth'},
    {type: 'Online'}
  ];
  pTypes: PType[] = [
    {type: 'Financial'},
    {type: 'Education'},
    {type: 'Entertainment and Events'},
    {type: 'Information Technology'},
    {type: 'Knowledge/Consulting'}
  ];
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      busName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      marketingType: ['', Validators.required],
      preferred: ['', Validators.required]
    });
  }
  // On Submit Functionality
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.form.value);
      const extra = { location: '' , address: '', phoneNumber: '', googleName: '', rating: ''};
      Object.assign(extra);
      alert(JSON.stringify(data));
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('https://api.jansss.live/auth/vendor/signup', data).subscribe(( data: any) => {
        this._snackBar.open('Sign up was successful.', 'Redirecting to Home.' , {duration: 3000});
        this.router.navigate(['/vendor-hub']);
      }, error => {
        this._snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
      this.registered = true;
    }
  }
}
