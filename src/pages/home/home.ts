import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';

import { IonicApp } from 'ionic-angular/components/app/app-root';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,public alertCtrl :AlertController) {
    
   
  }
 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'GoLive!',
      subTitle: 'GoLive feature is unavailble at the moment!',
      buttons: ['OK']
    });
    alert.present();
  }

  exitApp(){
    
 }
  

}

