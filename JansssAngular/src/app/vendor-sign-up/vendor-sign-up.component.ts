import { Component, OnInit } from '@angular/core';


const inputs = document.querySelectorAll(".input");

function addcl(){
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: [
    './vendor-sign-up.component.scss'
  ]
})
export class VendorSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    addcl();
    remcl();
  }

}
