import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: [
    './select-payment.component.scss',
    '../../../node_modules/animate.css/animate.min.css',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class SelectPaymentComponent implements OnInit {
  registered = false;
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  // Validator function for card number
  invalidCardNumber() {
    return (this.submitted && this.form.controls.cardNo.errors != null);
  }

  // Validator function for expiry date
  invalidExpiryDate() {
    return (this.submitted && this.form.controls.cardNo.errors != null);
  }

  // Validator function for CVV
  invalidCvv() {
    return (this.submitted && this.form.controls.cardNo.errors != null);
  }

  ngOnInit() {
    // $('#disableItem1').removeClass('disabled');
    // $('#disableItem2').removeClass('disabled');
    this.form = new FormGroup({
      cardNo: new FormControl('', Validators.required),
      exDate: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      this.router.navigate(['/launch']);
      this.registered = true;
    }
  }
}
