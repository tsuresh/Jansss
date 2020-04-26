import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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
  form: FormGroup;
  router: Router;

  email = new FormControl('', [Validators.email]); // Email Validation
  username = new FormControl();
  password = new FormControl();
  fName = new FormControl();
  sName = new FormControl();
  paymentPlan = new FormControl();
  paymentMethod = new FormControl();

  //Payment Plans
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

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      fName: new FormControl(),
      sName: new FormControl(),
      paymentPlan: new FormControl(),
      paymentMethod: new FormControl()
    });
  }

  onSubmit() { }
}
