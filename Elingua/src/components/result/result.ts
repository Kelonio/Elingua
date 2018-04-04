import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController} from 'ionic-angular';



@Component({
  selector: 'result-modal',
  templateUrl: 'result.html'
})
export class ResultModal {

  public results: any;
  


  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.results = this.navParams.get('results');
    console.log(this.results);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



}

