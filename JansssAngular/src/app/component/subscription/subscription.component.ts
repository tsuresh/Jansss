import {Component, Inject, OnInit} from '@angular/core';
import {
  DateAdapter, ErrorStateMatcher,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_DIALOG_DATA,
  MatDatepicker,
  MatDialog,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
import {DialogData} from '../pricing/pricing.component';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {CustomValidators} from '../../validator/custom-validators';
import {AuthorizationService} from '../../service/authorization.service';

const moment = _rollupMoment || _moment;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
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
    AuthorizationService
  ],
})
export class SubscriptionComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  formSubscribe: FormGroup;
  minDate = new Date(moment()); // the minimum date user can pick
  packageOptions: string[] = ['One-time Subscription', 'Premium Subscription'];
  constructor(public dialogRef: MatDialogRef<SubscriptionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private snackBar: MatSnackBar,
              private auth: AuthorizationService
  ) {
    this.formSubscribe = this.createSubscriptionForm();

  }

  createSubscriptionForm(): FormGroup {
    return this.formBuilder.group(
      {
        subscription : [null, Validators.required],
        cardNo : [
          null,
          Validators.required,
          // tslint:disable-next-line:max-line-length
          Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
        ],
        exDate : [
          moment(),
          Validators.required
        ],
        cvv : [
          null,
          Validators.required,
          Validators.pattern(/^[0-9]{3,4}$/)
        ],
        address : [null, Validators.required],
        payMethod : [null, Validators.required],
      }
    );
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.formSubscribe.value.exDate;
    ctrlValue.year(normalizedYear.year());
    this.formSubscribe.value.exDate.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.formSubscribe.value.exDate;
    ctrlValue.month(normalizedMonth.month());
    this.formSubscribe.value.exDate.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit() {
    if (this.formSubscribe.invalid === true) {
      return;
    } else {
      const data: any = {};
      if (this.formSubscribe.value.subscription !== null) {
        data.subscription = this.formSubscribe.value.subscription;
      }
      if (this.formSubscribe.value.cardNo !== null) {
        data.cardNo = this.formSubscribe.value.cardNo;
      }
      if (this.formSubscribe.value.exDate !== null) {
        data.exDate = this.formSubscribe.value.exDate;
      }
      if (this.formSubscribe.value.cvv !== null) {
        data.cvv = this.formSubscribe.value.cvv;
      }
      if (this.formSubscribe.value.address !== null) {
        data.address = this.formSubscribe.value.address;
      }
      if (this.formSubscribe.value.paymentMethod !== null) {
        data.paymentMethod = this.formSubscribe.value.paymentMethod;
      }
      this.auth.updateUserProfile(localStorage.getItem('uID'), data).subscribe(() => {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(this.formSubscribe.value.subscription + ' has been updated. The payment feature is currently unavailable', '' , {duration: 5000});
        }, error => {
        this.snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
    }
  }
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
