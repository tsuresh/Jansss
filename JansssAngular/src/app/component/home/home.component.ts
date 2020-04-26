import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../service/auth.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../../node_modules/animate.css/animate.min.css'
  ],
})

export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    // document.getElementById('logo-1').style.display = 'none';
    // Fixing Div for how it works
    // tslint:disable-next-line:only-arrow-functions
    $('document').ready(function() {
      // tslint:disable-next-line:prefer-const
      let fixmeTop = $('.fixme').offset().top;
      // tslint:disable-next-line:only-arrow-functions
      $(window).resize(function() {
        fixmeTop = $('.fixme').offset().top;
      });
        // tslint:disable-next-line:only-arrow-functions
      $(window).scroll(function() {
        // tslint:disable-next-line:prefer-const
        let currentScroll = $(window).scrollTop();
        // if (document.documentElement.scrollTop >= 600) {
        //   document.getElementById('logo-1').style.display = 'block';
        //   // document.getElementById('navbar').style.top = '0px';
        //   // document.getElementById('navbar').style.backgroundColor = 'white';
        // } else {
        //   document.getElementById('logo-1').style.display = 'none';
        // }
        if ((currentScroll >= fixmeTop - 40) && (currentScroll < fixmeTop)) {
            // how it works
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
            });
            // $('.logo-1').css({
            //   display: 'block'
            // });
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
          } else if ((currentScroll >= fixmeTop - 60) && (currentScroll < fixmeTop)) {
            // launch campaign
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
            });
            // $('.logo-1').css({
            //   display: 'block'
            // });
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
          } else if ((currentScroll >= fixmeTop - 80) && (currentScroll < fixmeTop)) {
            // select payment
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
              // margin: 'auto auto',
              // width: '88%'
            });
            // $('.logo-1').css({
            //   display: 'block'
            // });
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
            // $('.logo-1').css({
            //   display: 'block'
            // });
          } else if ((currentScroll >= fixmeTop - 100) && (currentScroll < fixmeTop)) {
            // select campaign
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
              // margin: 'auto auto',
              // width: '88%'
            });
            // $('.logo-1').css({
            //   display: 'block'
            // });
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
          } else if ((currentScroll >= fixmeTop - 120) && (currentScroll < fixmeTop)) {
            // enter details
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
            });
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
            // $('.logo-1').css({
            //   display: 'block'
            // });
          } else if ((currentScroll >= fixmeTop - 140) && (currentScroll < fixmeTop)) {
            // how it works campaign
            $('.fixme').css({
              position: 'sticky',
              top: '15%',
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
            // $('.logo-1').css({
            //   display: 'block'
            // });
            // $('.header').css({
            //   backgroundColor: 'white'
            // });
          } else {
            $('.fixme').css({
              position: 'static',
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
