import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: [
    './edit-profile.component.scss',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  router: Router;

  constructor() { }

  ngOnInit() {
    if (this.router.url === '/edit-profile') {
      // tslint:disable-next-line:only-arrow-functions
      window.onscroll = function() {
        if (document.documentElement.scrollTop >= 0) {
          document.getElementById('navbar').style.visibility = 'visible';
        }
      };
    }
    this.form = new FormGroup({
      fName: new FormControl(''),
      sName: new FormControl(''),
      paymentPlan: new FormControl('Member'),
      paymentMethod: new FormControl('PayPal')
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

  viewOption(idName) {
    const option = document.getElementById(idName);
    option.style.display = 'block';
  }
  getOption(catId, optClass, selectId, i) {
    const option = document.getElementById(catId);
    const options = document.getElementsByClassName(optClass);
    const selected = document.getElementById(selectId);
    option.style.display = 'none';
    selected.textContent = options[i].textContent;
  }
  clearOption() {
    const plan = document.getElementById('selectedPlan');
    const method = document.getElementById('selectedMethod')
    plan.textContent = 'Payment Plan';
    method.textContent = 'Payment Method';
  }
}
