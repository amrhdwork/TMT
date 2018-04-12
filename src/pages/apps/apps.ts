import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class appsPage {

  tabs: string = "projects";
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  openWebpage1() {
    window.open("https://play.google.com/store/apps/details?id=com.tmtgps", '_system', 'location=yes');
  };

  openWebpage2() {
    window.open("https://itunes.apple.com/us/app/tmtgps/id920553506?mt=8", '_system', 'location=yes');
  };

  openWebpage3() {
    window.open("http://www.tmtgps.net/", '_system', 'location=yes');
  };

  goToSlide(index) {
    console.log(index);
    if (index == 0) {
      this.tabs = "projects"
    } else {
      this.tabs = "clients"

    }
    this.slides.lockSwipes(false);
    this.slides.slideTo(index, 500);
    this.slides.lockSwipes(true);
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }



}

