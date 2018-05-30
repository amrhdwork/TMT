import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,ModalController  } from 'ionic-angular';
import { ContactPage  } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {



  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController ,) {




  }




  goToContactPage(){
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }



}



