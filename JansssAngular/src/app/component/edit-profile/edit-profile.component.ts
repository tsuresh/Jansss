import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

// Payment Plan Interface
interface PaymentPlan {
  plan: string;
}

// Payment method Interface
interface PaymentMethod {
  method: string;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: [
    './edit-profile.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class EditProfileComponent implements OnInit {
  public form: FormGroup;

  // Payment Plans
  plans: PaymentPlan[] = [
    {plan: 'One-time'},
    {plan: 'Premium'}
  ];
  // Payment Methods
  methods: PaymentMethod[] = [
    {method: 'Visa'},
    {method: 'Master'},
    {method: 'PayPal'}
  ];

  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        email: ['', Validators.email], // Email Validation
        username: [],
        password: [],
        fName: [],
        sName: [],
        paymentPlan: [],
        paymentMethod: []
      }
    );
  }

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit() { }

  onSubmit() { }
}
