import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './contact-us.component.scss',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      fName: new FormControl(''),
      sName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      comMethod: new FormControl(''),
      message: new FormControl('')
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
    selected.style.letterSpacing = '1px';
    selected.style.fontWeight = '400';
  }
}
