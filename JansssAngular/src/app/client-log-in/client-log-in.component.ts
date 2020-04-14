import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-client-log-in',
  templateUrl: './client-log-in.component.html',
  styleUrls: ['./client-log-in.component.scss']
})
export class ClientLogInComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
}
