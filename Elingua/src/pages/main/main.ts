import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '.././home/home';
import { InitialPage } from '.././initial/initial';
import { ProfilePage } from '.././profile/profile';

/*
  Generated class for the main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {

    private rootPage;
    private homePage;
    private initialPage;
    private profilePage;
    

    constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.rootPage = HomePage;

      this.homePage = HomePage;
      this.initialPage = InitialPage;
      this.profilePage = ProfilePage;

      
    }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad mainPage');
    }

    openPage(p) {
      this.rootPage = p;
    }

}
