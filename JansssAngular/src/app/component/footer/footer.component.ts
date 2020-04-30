import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ImplementationModalComponent} from '../unavailable-modal/implementation-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form: FormGroup;

  constructor(public dialog: MatDialog) { }

  // Modal
  openDialog() {
    this.dialog.open(ImplementationModalComponent);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('')
    });
  }
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
