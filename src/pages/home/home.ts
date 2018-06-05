import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,ModalController  } from 'ionic-angular';
import { ContactPage  } from '../contact/contact';
import {supportPage} from "../support/support";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})



export class HomePage {


  // ionViewDidEnter() {
  //   this.tabRef.select(2);
  // }


  url: string = "http://altatawwar.com/api/slider.php";
  slides  = [];




  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController ,
              public http: HttpClient ,) {
    this.getslides();

  }

  getslides() {
    return this.http.get(this.url)
    // .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        console.log(data['success']);
        if(data['success'] == 1){
          this.slides = data['images'];
          console.log(data['projects']);
        }
      })
  }





  goToContactPage(){
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  };

  goToSer1(){
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(supportPage);
    modal.present();
  }

  switchTabs() {
    this.navCtrl.parent.select(2);
  }


}

