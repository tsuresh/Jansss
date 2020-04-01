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
    if ((this.router.url === '/') || (this.router.url === '/details')) {
      $('.inner1').css({
        color: 'white',
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px',
      });
      $('.inner1 a').css({
        color: 'white',
      });
    } else if (this.router.url === '/campaign') {
      $('.inner1').css({
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
      $('.inner1 a, .inner2 a').css({
        color: 'white',
      });
    } else if (this.router.url === '/payment') {
      $('.inner1').css({
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        backgroundColor: '#E06F63',
      });
      $('.inner3').css({
        marginRight: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
      $('.inner1 a, .inner2 a, .inner3 a').css({
        color: 'white',
      });
    } else if (this.router.url === '/launch') {
      $('.inner1').css({
        marginLeft: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '9px 0px 0px 9px',
      });
      $('.inner2').css({
        backgroundColor: '#E06F63',
      });
      $('.inner3').css({
        backgroundColor: '#E06F63',
      });
      $('.inner4').css({
        marginRight: '4px',
        backgroundColor: '#E06F63',
        borderRadius: '0px 9px 9px 0px',
      });
      $('.inner1 a, .inner2 a, .inner3 a, .inner4 a').css({
        color: 'white',
      });
    }
  }
}

