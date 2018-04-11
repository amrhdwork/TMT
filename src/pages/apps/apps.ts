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
    window.open("https://play.google.com/store/apps/details?id=com.tmtgps", '_system', 'location=yes');
  };

  openWebpage2() {
    window.open("https://itunes.apple.com/us/app/tmtgps/id920553506?mt=8", '_system', 'location=yes');
  };

  openWebpage3() {
    window.open("http://www.tmtgps.net/", '_system', 'location=yes');
  };



}

// function openWebpage(){

//   window.open("http://google.com",'_system', 'location=yes');
// };
