import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthorizationService} from '../../service/authorization.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: [
    './edit-profile.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ],
  providers: [AuthorizationService]
})
export class EditProfileComponent implements OnInit {
  public form: FormGroup;

  // Payment Plans
  subscriptions: string[] = ['One-time', 'Premium'];
  // Payment Methods
  methods: string[] = ['Visa', 'Master', 'PayPal'];

  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        email: ['', Validators.email], // Email Validation
        userName: [],
        firstName: [],
        surName: [],
        subscription: [],
        paymentMethod: []
      }
    );
  }

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder, private authService: AuthorizationService) {
    this.form = this.createForm();
  }

  ngOnInit() { }

  onSubmit() {
    if (this.form.invalid === true) {
      return;
    } else {
      const data: any = {};
      if (this.form.value.email !== '') {
        data.email = this.form.value.email;
      }
      if (this.form.value.userName !== null) {
        data.userName = this.form.value.userName;
      }
      if (this.form.value.firstName !== null) {
        data.firstName = this.form.value.firstName;
      }
      if (this.form.value.surName !== null) {
        data.surName = this.form.value.surName;
      }
      if (this.form.value.subscription !== null) {
        data.subscription = this.form.value.subscription;
      }
      if (this.form.value.paymentMethod !== null) {
        data.paymentMethod = this.form.value.paymentMethod;
      }
      this.authService.updateUserProfile(localStorage.getItem('uID'), data).subscribe(() => {
        this._snackBar.open('Profile successfully edited.', '' , {duration: 3000});
        this.router.navigateByUrl('/profile').then(() => {
          window.location.reload();
        });
      }, error => {
        this._snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
    }
  }
}
