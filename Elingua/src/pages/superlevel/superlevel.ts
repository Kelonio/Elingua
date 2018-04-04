import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LevelPage } from '.././level/level';

import { StructureData } from '../.././providers/structure-data'

@Component({
    selector: 'page-superlevel',
    templateUrl: 'superlevel.html',
    providers: [StructureData]
})
export class SuperlevelPage {

    public superlevelSelected: string
    public levels: any[] = [];
    public superlevel: any;

    
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public structureData: StructureData
    ) {
      //this.superlevelSelected = this.navParams.get('superlevel');
      this.superlevel = this.navParams.get('superlevel');
      this.superlevelSelected = this.superlevel.class;

      this.structureData.getStructure().then(data => {
        this.levels = data['superlevel'][this.superlevelSelected];
      });
    }

    goToLevel(level) {
      this.navCtrl.push(LevelPage, {
        'level': level
      });
    }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad superlevelPage');
    }

}
