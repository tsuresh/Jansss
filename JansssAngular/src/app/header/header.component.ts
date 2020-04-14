import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

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
  }
}