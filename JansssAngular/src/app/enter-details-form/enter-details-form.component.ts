import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter-details-form',
  templateUrl: './enter-details-form.component.html',
  styleUrls: ['./enter-details-form.component.scss']
})
export class EnterDetailsFormComponent implements OnInit {
  productName = new FormControl('');
  constructor(private router: Router) {
  }
  navigate() {
    this.router.navigate(['/launch-page']);
  }
  ngOnInit() {
  }

}
