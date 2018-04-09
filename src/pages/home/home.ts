import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,ModalController  } from 'ionic-angular';
import { CONTACTPage  } from '../CONTACT/CONTACT';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goToCONTACTPage(){
    // this.navCtrl.push(CONTACTPage);
    let modal = this.modalCtrl.create(CONTACTPage);
    modal.present();
  }
  
}
