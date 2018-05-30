import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class supportPage {

  constructor(public navCtrl: NavController ,  public modalCtrl: ModalController ,) {

  }

  goToContactPage(){
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }
}
