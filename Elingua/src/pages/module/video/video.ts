import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
  providers: []
})
export class VideoPage {


  public video: any;
  public level: any;
  public index: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
     
  ) {
    this.level = this.navParams.get('level');
    this.video = this.navParams.get('video');    
    
  }

  ionViewDidLoad() {
    this.index = this.navParams.get('index'); // para saber cual es el numero del ejericio seleccionado ejemplo  3/8     
  }

 
 
}
