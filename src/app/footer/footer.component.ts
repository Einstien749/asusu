import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  errmess : string;
  sucmess : string;
  constructor(){
    this.errmess = 'hide';
    this.sucmess = 'hide';
  }

  showMess(m : string){
    if(m.length > 10){
      if(m.slice(-10) === '@gmail.com'){
        this.sucmess = 'show';
        this.errmess = 'hide';
      }
      else{
        this.sucmess = 'hide';
        this.errmess = 'show';
      }
    }
    else{
      this.sucmess = 'hide';
      this.errmess = 'show';
    }
    console.log(m);
  }
}
