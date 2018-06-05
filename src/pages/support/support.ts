import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ContactPage} from "../contact/contact";
import { AlertController } from 'ionic-angular';
import {HttpClient, HttpParams, HttpHeaders , HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
})
export class supportPage {


  url: string = "http://altatawwar.com/api/contact.php";
  url2: string = "http://altatawwar.com/api/service_type.php";
  servicestype = [];
  serviceType: any = "";


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private alertCtrl: AlertController,
              public http: HttpClient,) {
    this.getServiceTypes();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }


  goToContactPage() {
    // this.navCtrl.push(ContactPage);
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }


  getServiceTypes() {
    return this.http.get(this.url2)
    // .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        console.log(data['success']);
        if (data['success'] == 1) {
          // debugger;
          // this.servicestype = data['option'];
          for (let k in data['option']) {
            console.log(k);
            this.servicestype.push({
              "key": k,
              "value": data["option"][k]
            })
          }
          console.log(data['option']);
        }
      })
  }

  support = {
    "name": "",
    "email": "",
    "Phone": "",
    "Service_type": "",
    "message": ""
  }

  sendContact() {

    var body = {
      "name": this.support.name,
      "email": this.support.email,
      "Phone": this.support.Phone,
      "Service_type": this.support.Service_type,
      "message": this.support.message

    }
    console.log(body)

    // let param = new HttpParams ();
    // param.append("NameEn", body.name);
    // param.append("email", body.email);
    // param.append("Phone", body.Phone);
    // param.append("Service_type", "0");
    // param.append("message", body.message);

    const body__ = new HttpParams()
      .set(`name`, body.name)
      .set(`email`, body.email)
      .set(`phone`, body.Phone)
      .set(`Service_type`, "1")
      .set(`message`, body.message)
    ;

    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    //
    return this.http.post(this.url, body__.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
    // .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        console.log(data['success']);

        this.support = {
          "name": "",
          "email": "",
          "Phone": "",
          "Service_type": "",
          "message": ""
        }

        this.showAlert("تم ارسال الطلب بنجاح", data['msg']);
        // if(data['success'] == 1){
        //   this.servicestype = data['option'];
        //   console.log(data['option']);
        // }




      })


    //
    // this.http.post(this.url, body__.toString(), { headers, observe: 'response' })
    //   .map((res: HttpResponse<Object>) => res.ok)
    //   .catch((err: any) => Observable.of(false));


  }

  showAlert(title,subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{
        text: 'حسنا',
        handler: data => {
          console.log('Saved clicked');
        }
      }]
    });
    alert.present();
  }

}



