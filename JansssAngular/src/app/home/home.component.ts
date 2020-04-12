import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

// // tslint:disable-next-line:only-arrow-functions
// window.onscroll = function() { slideInContent(); };

// function slideInContent() {
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     document.getElementById('intro').className = 'animated fadeInUp';
//     document.getElementById('logo').className = 'animated slideInRight logo-left';
//     document.getElementById('arrow').className = 'animated fadeIn arrow-down';
//     document.getElementById('intro').style.visibility = 'visible';
//     document.getElementById('arrow').style.visibility = 'visible';
//   } else {
//     document.getElementById('intro').className = '';
//     document.getElementById('logo').className = 'animated fadeInUp';
//     document.getElementById('intro').style.visibility = 'hidden';
//     document.getElementById('arrow').style.visibility = 'hidden';
//   }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})

export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    // // tslint:disable-next-line:only-arrow-functions
    // if (this.router.url === '/') {
    //   // alert('hi');
    //   document.getElementById('navbar').style.visibility = 'hidden';
    //   // tslint:disable-next-line:only-arrow-functions
    //   window.onscroll = function() {
    //     if (document.documentElement.scrollTop >= 1380) {
    //       document.getElementById('navbar').style.visibility = 'visible';
    //     } else {
    //       document.getElementById('navbar').style.visibility = 'hidden';
    //     }
    //   };
    // }
    // tslint:disable-next-line:only-arrow-functions
    $('document').ready(function() {
      // tslint:disable-next-line:prefer-const
      let fixmeTop = $('.fixme').offset().top;
      // tslint:disable-next-line:prefer-const
      let windowSize = $(window).width();
      // tslint:disable-next-line:only-arrow-functions
      $(window).resize(function() {
        fixmeTop = $('.fixme').offset().top;
        windowSize = $(window).width();
      });
      // if  (windowSize >= 1100) {
        // tslint:disable-next-line:only-arrow-functions
      $(window).scroll(function() {
          // tslint:disable-next-line:prefer-const
          let currentScroll = $(window).scrollTop();
          if ((currentScroll >= fixmeTop - 20) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'visible',
            });
          } else if ((currentScroll >= fixmeTop - 40) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'visible'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '1',
            });
            $('.heading').css({
              visibility: 'hidden',
            });
          } else if ((currentScroll >= fixmeTop - 60) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'visible'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '1',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'hidden',
            });
          } else if ((currentScroll >= fixmeTop - 80) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'visible'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '1',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'hidden',
            });
          } else if ((currentScroll >= fixmeTop - 100) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'visible'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '1',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'hidden',
            });
          } else if ((currentScroll >= fixmeTop - 120) && (currentScroll < fixmeTop)) {
            $('.fixme').css({
              position: 'fixed',
              top: '15%',
              margin: 'auto auto',
              width: '88%'
            });
            // $('#fix').addClass('container');
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'visible',
            });
          } else {
            $('.fixme').css({
              position: 'static',
              margin: 'auto auto',
              width: '100%'
            });
            $('#description1').css({
              visibility: 'hidden'
            });
            $('#description2').css({
              visibility: 'hidden'
            });
            $('#description3').css({
              visibility: 'hidden'
            });
            $('#description4').css({
              visibility: 'hidden'
            });
            $('.opaque1').css({
              opacity: '0.5',
            });
            $('.opaque2').css({
              opacity: '0.5',
            });
            $('.opaque3').css({
              opacity: '0.5',
            });
            $('.opaque4').css({
              opacity: '0.5',
            });
            $('.heading').css({
              visibility: 'visible',
            });
          }
        });
      // }
    });
  }
}
