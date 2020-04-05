import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // const a = this.router.url;
    // // tslint:disable-next-line:only-arrow-functions
    // if ((a === '/')) {
    //   // document.getElementById('navbar').style.visibility = 'hidden';
    //     // tslint:disable-next-line:only-arrow-functions
    //   window.onscroll = function() {
    //       if (document.documentElement.scrollTop >= 1380) {
    //         document.getElementById('navbar').style.visibility = 'visible';
    //         // document.getElementById('navbar').style.top = '0px';
    //         // document.getElementById('navbar').style.backgroundColor = 'white';
    //       } else {
    //         // document.getElementById('navbar').style.top = '-90px';
    //         // document.getElementById('navbar').style.position = 'sticky';
    //         document.getElementById('navbar').style.visibility = 'hidden';
    //       }
    //     };
    // } else {
    //   document.getElementById('navbar').style.visibility = 'visible';
    // }

    const header = document.getElementById('myDIV');
    const btns = header.getElementsByClassName('item');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }
}
