import {Component, Inject, OnInit} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatDatepicker, MatDialog, MatDialogRef} from '@angular/material';
import {DialogData} from '../pricing/pricing.component';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';

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
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SubscriptionComponent implements OnInit {
  formSubscribe: FormGroup;
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
  package = new FormControl('', [Validators.required]);
  packageOptions: string[] = ['One-time Subscription', 'Premium Subscription'];
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

  constructor(public dialogRef: MatDialogRef<SubscriptionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog) { }


  onSubmit() { }
  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    $('#disableItem1').removeClass('disabled');
    $('#disableItem2').removeClass('disabled');
  }
}
