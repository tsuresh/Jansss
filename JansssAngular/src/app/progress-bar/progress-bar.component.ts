import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    if (this.router.url === '/') {
      $('.inner1').css({
        color: 'white',
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px',
      });
    } else if (this.router.url === '/campaign') {
      $('.inner1').css({
        color: 'white',
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        color: 'white',
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
    } else if (this.router.url === '/payment') {
      $('.inner1').css({
        color: 'white',
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        color: 'white',
        backgroundColor: '#E06F63',
      });
      $('.inner3').css({
        color: 'white',
        marginRight: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
    } else if (this.router.url === '/launch') {
      $('.inner1').css({
        color: 'white',
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        color: 'white',
        backgroundColor: '#E06F63',
      });
      $('.inner3').css({
        color: 'white',
        backgroundColor: '#E06F63',
      });
      $('.inner4').css({
        color: 'white',
        marginRight: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
    }
  }
}

