import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    '../../../node_modules/animate.css/animate.min.css',
    '../../../node_modules/hover.css/css/hover-min.css'
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    window.onscroll = function() { slideInContent(); };

    function slideInContent() {
      if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById('middle').className = 'img-fluid mt-5 ml-5 float-left animated fadeInRight slower middle';
        document.getElementById('right').style.visibility = 'visible';
        document.getElementById('right').className = 'container text-left ml-5 animated fadeInRight slower';
      }
    }
  }

  scrollWin() {
    window.scrollBy(0, 650);
  }
}
