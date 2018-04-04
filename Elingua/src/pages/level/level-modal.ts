import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController} from 'ionic-angular';



@Component({
  selector: 'modal-level',
  templateUrl: 'modal-level.html'
})
export class LevelModal {

  constructor(public viewCtrl: ViewController) {     

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}

