import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(private router: Router) { }

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
  }
}
