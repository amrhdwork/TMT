import { Component, ViewChild } from '@angular/core';
import {ModalController, NavController, Slides} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {ContactPage} from "../contact/contact";


@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class appsPage {

  tabs: string = "projects";
  @ViewChild(Slides) slides: Slides;


  url: string = "http://altatawwar.com/api/ourProjects.php";
  projects  = [];

  url2: string = "http://altatawwar.com/api/customersProjects.php";
  projects2  = [];

  constructor(public navCtrl: NavController ,public http: HttpClient ,  public modalCtrl: ModalController ,) {
    this.getdata();
    this.getdata2();

  }

  getdata() {
    return this.http.get(this.url)
      // .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        console.log(data['success']);
        if(data['success'] == 1){
          this.projects = data['projects'];
          console.log(data['projects']);
        }
      })
  }


  getdata2() {
    return this.http.get(this.url2)
    // .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        console.log(data['success']);
        if(data['success'] == 1){
          this.projects2 = data['projects'];
          console.log(data['projects']);
        }
      })
  }

  openSite(siteUrl){
    window.open(siteUrl, '_system', 'location=yes');
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

  goToContactPage(){
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }


}




