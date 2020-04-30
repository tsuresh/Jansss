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
    window.onscroll = function() { slideInContent(); };

    // On Scroll Functionality
    function slideInContent() {
      const middle = document.getElementById('middle');
      const text = document.getElementById('text');
      const image = document.getElementById('image');
      if (middle != null) {
        if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 5) {
          middle.style.display = 'none';
          text.style.display = 'block';
          image.style.display = 'block';
        }
      }
    }
  }
}
