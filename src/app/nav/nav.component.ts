import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dropdown : string;
  closee : boolean;
  open : boolean;

  constructor(){
    this.dropdown = "hide";
    this.closee = false;
    this.open = true;
  }
  showNav(){
    if(this.dropdown == "show"){
      this.dropdown = "hide";
      this.closee = false;
      this.open = true;
      console.log("Hi")

    }
    else{
      this.dropdown = "show";
      this.closee = true;
      this.open = false;
      console.log("Show");

    }
  }
}
