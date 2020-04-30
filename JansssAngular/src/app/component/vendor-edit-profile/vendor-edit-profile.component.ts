import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';

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

  mTypes: string[] = [
    'TV',
    'Radio',
    'Press',
    'Social media',
    'Banners',
    'Online',
    'Transactional',
    'Word of mouth',
    'Viral',
    'Call to action',
    'Diversity',
    'Mass marketing',
    'Email',
    'Seasonal',
    'Evangelism',
    'Guerilla',
    'Personalized',
    'Affinity',
    'Event',
    'Content',
    'Promotional'
  ];
  pTypes: string[] = [
    'Knowledge / Consulting',
    'Information technology',
    'Design',
    'Entertainment and Events',
    'Government services',
    'Non-profit services',
    'Education',
    'Construction',
    'Financial',
    'Agents / Brokers',
    'Wellness and personal grooming',
    'Sports',
    'Hospitality',
    'Transport',
    'Utilities',
    'Insurance',
    'Food and Beverages',
    'Rentals',
    'Shopping goods',
    'Commodities',
    'Convenience products',
    'Niche products',
    'Complimentary goods',
    'Premium products'
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
