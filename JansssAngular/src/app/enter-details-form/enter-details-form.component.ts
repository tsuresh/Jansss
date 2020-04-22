import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-enter-details-form',
  templateUrl: './enter-details-form.component.html',
  styleUrls: ['./enter-details-form.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})
export class EnterDetailsFormComponent implements OnInit {
  registered = false;
  submitted = false;
  detailsForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  // navigate() {
  // }
  invalidProductName() {
    return (this.submitted && this.detailsForm.controls.productName.errors != null);
  }
  invalidIndustry() {
    return (this.submitted && this.detailsForm.controls.industry.errors != null);
  }
  invalidAudience() {
    return (this.submitted && this.detailsForm.controls.audience.errors != null);
  }
  invalidBudget() {
    return (this.submitted && this.detailsForm.controls.budget.errors != null);
  }
  invalidLocation() {
    return (this.submitted && this.detailsForm.controls.location.errors != null);
  }
  invalidPrice() {
    return (this.submitted && this.detailsForm.controls.price.errors != null);
  }
  invalidDuration() {
    return (this.submitted && this.detailsForm.controls.duration.errors != null);
  }
  onSubmit() {
    this.submitted = true;
    if (this.detailsForm.invalid === true) {
      return;
    } else {
      //   res => {
      //     alert('Generating campaign');
      //   },
      //   err => {
      //     alert('An error occurred. ');
      //   }
      // );
      // tslint:disable-next-line:only-arrow-functions
      this.router.navigate(['/campaign']);
      this.detailsForm.reset(this.detailsForm.value);
      this.registered = true;
    }
  }
  ngOnInit() {
    // // tslint:disable-next-line:only-arrow-functions
    // $('document').ready(function() {
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('#enterDetails').submit(function(event) {
    //     // onSubmit();
    //     event.preventDefault();
    //   });
    // });
    this.detailsForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      audience: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      location: ['', [Validators.required]],
      price: ['', [Validators.required]],
      duration: ['', [Validators.required]],

    });
  }

}

