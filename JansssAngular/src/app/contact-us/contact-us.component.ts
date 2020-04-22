import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './contact-us.component.scss',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class ContactUsComponent implements OnInit {

  registered = false;
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  // Validator function for title
  invalidTitle() {
    return(this.submitted && this.form.controls.title.errors != null);
  }

  // Validator function for first name
  invalidFirstName() {
    return(this.submitted && this.form.controls.fName.errors != null);
  }

  // Validator function for email
  invalidEmail() {
    return(this.submitted && this.form.controls.email.errors != null);
  }

  // Validator function for phone number
  invalidPhoneNumber() {
    return(this.submitted && this.form.controls.phone.errors != null);
  }

  // Validator function for communication method
  invalidComMethod() {
    return(this.submitted && this.form.controls.comMethod.errors != null);
  }

  // Validator function for message
  invalidMessage() {
    return(this.submitted && this.form.controls.message.errors != null);
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      fName: new FormControl('', Validators.required),
      sName: new FormControl(''),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comMethod: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid === true) {
      return;
    } else {
      this.registered = true;
    }
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
    selected.style.letterSpacing = '1px';
    selected.style.fontWeight = '400';
  }
}
