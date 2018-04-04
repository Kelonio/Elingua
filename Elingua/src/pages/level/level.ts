import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

import { LevelModal } from './level-modal';
import { ModulePage } from '.././module/module';

import { StructureData } from '../.././providers/structure-data';

import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
  providers: [StructureData]
})
export class LevelPage {
 
  public superlevel: any;
  public modules: any;
  public levelSelected: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public structureData: StructureData,
    private statusBar: StatusBar
  ) {

    this.levelSelected = this.navParams.get('level');

    //this.statusBar.backgroundColorByHexString(this.levelSelected['color']);

    //console.log('levelSelected');
    //console.log(this.levelSelected);


    //this.levelSelected.file = "level0.json"; //hardcodeado
    

    this.structureData.getLevel(this.levelSelected.file).then(data => {
      this.modules = data['modules'];
      this.superlevel = data['superlevel'];
    }) 
    
  }  





  totalDuration(content: any[]) {
    return content.reduce((a, b) => a + b.length,0);
  }


  openModal() {
    let modal = this.modalCtrl.create(LevelModal);
    modal.present();

  }

  goToModule(module) {
    this.navCtrl.push(ModulePage, {
      'level': this.levelSelected,
      'module': module.name,
      'contentType': module.contentType
    });
  }

  goToLevel(level) {
    this.navCtrl.push(LevelPage, {
      'level': level
    });
  }

  removeBlanks(x: string) {
    let aux = x.replace(/\s/g, '-');
    return aux;
  }

  test() {
    //console.log('test');
  }
 
}

