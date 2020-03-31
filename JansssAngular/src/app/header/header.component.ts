import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:only-arrow-functions
window.onscroll = function() {scrollFunction(); };
function scrollFunction() {
  // if (this.router.url === '/home') {
    if (document.documentElement.scrollTop >= 1380 ) {
      document.getElementById('navbar').style.top = '0px';
      // document.getElementById('navbar').style.backgroundColor = 'white';
    } else {
      document.getElementById('navbar').style.top = '-90px';
      // document.getElementById('navbar').style.position = 'sticky';
      // document.getElementById('navbar').style.visibility = 'hidden';
    }
  // }
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // scrollFunction();
  }

}
