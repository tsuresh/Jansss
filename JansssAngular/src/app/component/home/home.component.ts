import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthorizationService} from '../../service/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../../node_modules/animate.css/animate.min.css'
  ],
  providers: [AuthorizationService]
})

export class HomeComponent implements OnInit {
  constructor(private authService: AuthorizationService) { }
  ngOnInit() {
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
        if ((currentScroll >= fixmeTop - 40) && (currentScroll < fixmeTop)) {
            // how it works
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
          } else if ((currentScroll >= fixmeTop - 140) && (currentScroll < fixmeTop)) {
            // launch campaign
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
          } else if ((currentScroll >= fixmeTop - 240) && (currentScroll < fixmeTop)) {
            // select payment
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
          } else if ((currentScroll >= fixmeTop - 340) && (currentScroll < fixmeTop)) {
            // select campaign
            $('.fixme').css({
              position: 'sticky',
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
          } else if ((currentScroll >= fixmeTop - 440) && (currentScroll < fixmeTop)) {
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
          } else if ((currentScroll >= fixmeTop - 500) && (currentScroll < fixmeTop)) {
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
          } else if ((currentScroll >= fixmeTop - 540) && (currentScroll < fixmeTop)) {
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
    if (this.authService.isLoggedIn() ) {
      $('.progressDiv').css({
        display: 'block',
      });
      $('.enterDetails').css({
        display: 'block',
      });
      $('.logout').css({
        display: 'block',
      });
    } else {
      $('.enterDetails').css({
        display: 'none',
      });
      $('.progressDiv').css({
        display: 'none',
      });
      $('.logout').css({
        display: 'none',
      });
    }
  }
}
