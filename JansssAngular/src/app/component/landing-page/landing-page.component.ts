import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    '../../../../node_modules/animate.css/animate.min.css',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    window.addEventListener('visit', window.onscroll = function() { slideInContent(); }, false)
    // tslint:disable-next-line:only-arrow-functions
    // window.onscroll = function() { slideInContent(); };

    // On Scroll Functionality
    function slideInContent() {
      const middle = document.getElementById('middle');
      const right = document.getElementById('right');
      if (middle != null) {
        if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 5) {
          middle.className = 'img-fluid ml-5 float-left animated fadeInRight slower middle';
          right.style.visibility = 'visible';
          right.className = 'container text-left ml-5 animated fadeInRight slower';
        }
      }
    }
  }

  // Navigation Arrow Functionality
  scrollWin() {
    window.scrollBy(0, 650);
  }
}
