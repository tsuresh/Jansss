import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

// Communication methods interface
interface ComMethod {
  method: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './contact-us.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  // Form Validations
  fName = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{9}$/)
  ]);
  message = new FormControl('', Validators.required);
  accept = new FormControl('', Validators.required);
  comMethod = new FormControl('', Validators.required);
  // Communication methods
  methods: ComMethod[] = [
    {method: 'SMS'},
    {method: 'E-mail'}
  ];

  constructor(private formBuilder: FormBuilder, private route: Router) { }
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      fName: new FormControl(),
      sName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      comMethod: new FormControl(),
      message: new FormControl(),
      accept: new FormControl()
    });
  }

  onSubmit() { }
}
