import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: [
    './select-payment.component.scss',
    '../../../../node_modules/animate.css/animate.min.css',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ],
  providers: [{
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class SelectPaymentComponent implements OnInit {
  registered = false;
  submitted = false;
  form: FormGroup;
  minDate = new Date(moment()); // the minimum date user can pick

  // Input validations
  cardNo = new FormControl('', [
    Validators.required,
    // tslint:disable-next-line:max-line-length
    Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
  ]);
  exDate = new FormControl(moment(), [Validators.required]);
  cvv = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{3,4}$/)
  ]);
  address = new FormControl('', [Validators.required]);
  payMethod = new FormControl('', [Validators.required]);

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.exDate.value;
    ctrlValue.year(normalizedYear.year());
    this.exDate.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.exDate.value;
    ctrlValue.month(normalizedMonth.month());
    this.exDate.setValue(ctrlValue);
    datepicker.close();
  }

  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
    $('#disableItem1').removeClass('disabled');
    $('#disableItem2').removeClass('disabled');
    this.form = new FormGroup({
      cardNo: new FormControl(),
      cvv: new FormControl(),
      exDate: new FormControl(),
      address: new FormControl(),
      payMethod: new FormControl()
    });
  }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  onSubmit() { }
}
