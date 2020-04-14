import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;

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
}
