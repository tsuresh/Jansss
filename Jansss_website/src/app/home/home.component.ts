<<<<<<< HEAD
import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

window.onscroll = function() { slideInContent() };

function slideInContent() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("intro").className = "animated fadeInUp";
    document.getElementById("logo").className = "animated slideInRight logo-left";
    document.getElementById("arrow").className = "animated fadeIn arrow-down";
    document.getElementById("intro").style.visibility = "visible";
    document.getElementById("arrow").style.visibility = "visible";
  } else {
    document.getElementById("intro").className = "";
    document.getElementById("logo").className = "animated fadeInUp";
    document.getElementById("intro").style.visibility = "hidden";
    document.getElementById("arrow").style.visibility = "hidden";
  }
}
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 406c8398f772d6fc495976e5af62a9e31d04f588

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: [
      './home.component.scss',
      '../../../node_modules/animate.css/animate.min.css'
  ]
})

export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    slideInContent();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#E06F63';
  }
=======
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 406c8398f772d6fc495976e5af62a9e31d04f588
}
