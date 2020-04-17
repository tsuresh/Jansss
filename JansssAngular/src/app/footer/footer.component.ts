import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('')
    });
  }
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
