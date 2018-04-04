import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperlevelPage } from '.././superlevel/superlevel';
import { StructureData } from '../.././providers/structure-data';

/*
  Generated class for the initial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-initial',
    templateUrl: 'initial.html',
    providers: [StructureData]
})
export class InitialPage {

  public levels: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public elinguaLevels: StructureData) {

    this.elinguaLevels.getElinguaLevels().then(data => {
      console.log("ELINGUA " + data);
      this.levels = data['elinguaLevels'];
    });
  }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad initialPage');
    }

    goToSuperlevel(superlevel) {
      this.navCtrl.push(SuperlevelPage, {
        'superlevel': superlevel
      });
    }

    getClass(className) {
      return className + '-bg';
    }

}
