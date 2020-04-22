import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
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
  form: FormGroup;

  constructor(private router: Router) { }

  navigateToLaunch() {
    this.router.navigate(['/launch']);
  }

  ngOnInit() {
    $('#disableItem1').removeClass('disabled');
    $('#disableItem2').removeClass('disabled');
    this.form = new FormGroup({
      cardNo: new FormControl(''),
      exDate: new FormControl(''),
      cvv: new FormControl('')
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
