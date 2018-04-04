import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = MainPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      //statusBar.overlaysWebView(false);
      
      //statusBar.backgroundColorByHexString('#fecf00');
      //statusBar.styleBlackTranslucent();
      statusBar.hide();
      
      splashScreen.hide();

    });
  }
}


//import { Component } from '@angular/core';
//import { Platform } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';


//import { MainPage } from '../pages/main/main';

//@Component({
//  templateUrl: 'app.html'
//})
//export class MyApp {
//  rootPage: any = MainPage;

//  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
//    platform.ready().then(() => {
//      // Okay, so the platform is ready and our plugins are available.
//      // Here you can do any higher level native things you might need.
//      statusBar.styleDefault();
//      splashScreen.hide();
//    });
//  }
//}