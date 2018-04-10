import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class appsPage {

  constructor(public navCtrl: NavController) {

  }

  openWebpage() {
    console.log("openWebpage");
    window.open("http://google.com", '_system', 'location=yes');
  };


}

// function openWebpage(){

//   window.open("http://google.com",'_system', 'location=yes');
// };
