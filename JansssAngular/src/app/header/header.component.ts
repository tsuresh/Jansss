import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // collapsed = true;
  // toggleCollapsed(): void {
  //   this.collapsed = !this.collapsed;
  // }

  constructor(private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    (function() {

      // tslint:disable-next-line:only-arrow-functions
      const Menu = (function() {
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.menu');
        const menuList = document.querySelector('.menu__list');
        const brand = document.querySelector('.menu__brand');
        const menuItems = document.querySelectorAll('.menu__item');

        let active = false;

        // tslint:disable-next-line:only-arrow-functions
        const toggleMenu = function() {
          if (!active) {
            menu.classList.add('menu--active');
            menuList.classList.add('menu__list--active');
            brand.classList.add('menu__brand--active');
            burger.classList.add('burger--close');
            for (let i = 0, ii = menuItems.length; i < ii; i++) {
              menuItems[i].classList.add('menu__item--active');
            }

            active = true;
          } else {
            menu.classList.remove('menu--active');
            menuList.classList.remove('menu__list--active');
            brand.classList.remove('menu__brand--active');
            burger.classList.remove('burger--close');
            for (let i = 0, ii = menuItems.length; i < ii; i++) {
              menuItems[i].classList.remove('menu__item--active');
            }

            active = false;
          }
        };

        // tslint:disable-next-line:prefer-const only-arrow-functions
        let bindActions = function() {
          burger.addEventListener('click', toggleMenu, false);
          for (let i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].addEventListener('click', toggleMenu, false);
          }

        };

        // tslint:disable-next-line:only-arrow-functions
        const init = function() {
          bindActions();
        };

        return {
          init
        };

      }());

      Menu.init();

    }());
    //   // tslint:disable-next-line:only-arrow-functions
    // if (this.router.url === '/') {
    //   document.getElementById('navbar').style.visibility = 'hidden';
    //   // tslint:disable-next-line:only-arrow-functions
    //   window.onscroll = function() {
    //     if (document.documentElement.scrollTop >= 1380) {
    //       document.getElementById('navbar').style.visibility = 'visible';
    //       // document.getElementById('navbar').style.top = '0px';
    //       // document.getElementById('navbar').style.backgroundColor = 'black';
    //     } else {
    //       // document.getElementById('navbar').style.top = '-90px';
    //       // document.getElementById('navbar').style.position = 'sticky';
    //       document.getElementById('navbar').style.visibility = 'hidden';
    //     }
    //   };
    // } else {
    //   document.getElementById('navbar').style.visibility = 'visible';
    // }
    //
    // const header = document.getElementById('myDIV');
    // const btns = header.getElementsByClassName('menu_link');
    // // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener('click', function() {
    //     const current = document.getElementsByClassName('active');
    //     current[0].className = current[0].className.replace(' active', '');
    //     this.className += ' active';
    //   });
    // }
  }
}
