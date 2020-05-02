import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';

// Error when invalid control is dirty, touched, or submitted
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-vendor-edit-profile',
  templateUrl: './vendor-edit-profile.component.html',
  styleUrls: ['./vendor-edit-profile.component.scss']
})
export class VendorEditProfileComponent implements OnInit {
  public form: FormGroup;
  matcher = new MyErrorStateMatcher();

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

  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        email: ['', Validators.required, Validators.email],
        busName: ['', Validators.required],
        password: ['', Validators.required, Validators.minLength(8)],
        marketingType: ['', Validators.required],
        preferred: ['', Validators.required],
      }
    );
  }

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  ngOnInit() { }

  onSubmit() { }
}
