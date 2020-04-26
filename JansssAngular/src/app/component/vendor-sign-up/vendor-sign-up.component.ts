import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {HttpClient} from '@angular/common/http';

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
  // Input Validations
  company = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  mType = new FormControl('', Validators.required);
  pType = new FormControl('', Validators.required);

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
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.form = new FormGroup({
      company: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      mType: new FormControl(),
      pType: new FormControl()
    });
  }
  // On Submit Functionality
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.form.value);
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('https://jansss.live/auth/vendor/signup', data).subscribe(( data: any) => {
        alert('Sign up was successful');
      }, error => {
        alert('An error occurred. ' + JSON.stringify(error.error));
      });
      this.registered = true;
    }
  }
}
