import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';

interface MType {
  type: string;
}

interface PType {
  type: string;
}

@Component({
  selector: 'app-vendor-edit-profile',
  templateUrl: './vendor-edit-profile.component.html',
  styleUrls: ['./vendor-edit-profile.component.scss']
})
export class VendorEditProfileComponent implements OnInit {
  form: FormGroup;
  router: Router;

  email = new FormControl('', [Validators.email]); // Email Validation
  name = new FormControl();
  password = new FormControl();
  mType = new FormControl();
  pType = new FormControl();

  mTypes: MType[] = [
    {type: 'Social Media'},
    {type: 'Banners'},
    {type: 'Event'},
    {type: 'Word of mouth'},
    {type: 'Online'}
  ];
  pTypes: PType[] = [
    {type: 'Financial'},
    {type: 'Education'},
    {type: 'Entertainment and Events'},
    {type: 'Information Technology'},
    {type: 'Knowledge/Consulting'}
  ];

  constructor(public dialog: MatDialog) { }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
      mType: new FormControl(),
      pType: new FormControl()
    });
  }

  onSubmit() { }
}
