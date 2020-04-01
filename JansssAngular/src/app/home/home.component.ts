import {AfterViewInit, ElementRef} from '@angular/core';
<<<<<<< HEAD
=======
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
>>>>>>> FrontEnd

// tslint:disable-next-line:only-arrow-functions
window.onscroll = function() { slideInContent(); };

function slideInContent() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById('intro').className = 'animated fadeInUp';
    document.getElementById('logo').className = 'animated slideInRight logo-left';
    document.getElementById('arrow').className = 'animated fadeIn arrow-down';
    document.getElementById('intro').style.visibility = 'visible';
    document.getElementById('arrow').style.visibility = 'visible';
  } else {
    document.getElementById('intro').className = '';
    document.getElementById('logo').className = 'animated fadeInUp';
    document.getElementById('intro').style.visibility = 'hidden';
    document.getElementById('arrow').style.visibility = 'hidden';
  }
}
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
=======
>>>>>>> FrontEnd

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../node_modules/animate.css/animate.min.css'
  ]
})

export class HomeComponent implements OnInit {
  ngOnInit() {
    slideInContent();
  }

  ngAfterViewInit() {
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#E06F63';
    // tslint:disable-next-line:only-arrow-functions
    $('document').ready(function() {
      // tslint:disable-next-line:prefer-const
      let fixmeTop = $('.fixme').offset().top;
      // tslint:disable-next-line:only-arrow-functions
      $(window).scroll(function() {
        // tslint:disable-next-line:prefer-const
        let currentScroll = $(window).scrollTop();
        if ((currentScroll >= fixmeTop - 20) && (currentScroll < fixmeTop)) {
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
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
        } else if ((currentScroll >= fixmeTop - 40) && (currentScroll < fixmeTop)) {
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
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
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
            top: '15%',
          });
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
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
            top: '15%',
          });
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
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
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
        } else if ((currentScroll >= fixmeTop - 120) && (currentScroll < fixmeTop)) {
          $('#fix').addClass('container');
          $('.fixme').css({
            position: 'fixed',
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
    });
  }
}