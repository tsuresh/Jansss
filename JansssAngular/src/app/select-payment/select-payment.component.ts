import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: [
    './select-payment.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})
export class SelectPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToLaunch() {
    this.router.navigate(['/launch']);
  }

  ngOnInit() {
  }

}
