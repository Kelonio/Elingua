import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { UserData } from '../.././providers/user-data';
import { StructureData } from '../.././providers/structure-data';

import { VideoPage } from './video/video';
import { GrammarPage } from './grammar/grammar';
import { ComprehensionPage } from './comprehension/comprehension';
import { VocabularyPage } from './vocabulary/vocabulary';
import { FinalTestPage } from './final-test/final-test';


@Component({
  selector: 'page-module',
  templateUrl: 'module.html',
  providers: [UserData, StructureData]
})
export class ModulePage {

  public selectedModule: string;
  public selectedModuleType: any;
  public data: any;
  public module: any;
  public moduleContent: any[] = [];

  public levelSelected: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl: ModalController,
      public userData: UserData,
      public structureData: StructureData
  ) {
    this.levelSelected = this.navParams.get('level');
    this.selectedModule = this.navParams.get('module');
    this.selectedModuleType = this.navParams.get('contentType');


    //console.log('aqui');
    
    //console.log(this.levelSelected);
    //console.log(this.selectedModule);
    //console.log(this.selectedModuleType);

    //this.userData.getData().then(data => {
    //  this.data = data;
    //  this.module = data.modules[this.selectedModule];
    //  console.log(data.modules[this.selectedModule]);      
    //}) 

    this.structureData.getLevel(this.levelSelected.file).then(data => {
      this.data = data;

      let modulesAux = data['modules'];
      
      this.module = modulesAux.find(x => x.name == this.selectedModule);
      this.moduleContent = this.module.content;

    }) 

  }

  go(where,index) {
    /* dependiendo de que modulo estamos vamos a un sitio u otro*/

    //console.log('where');
    //console.log(where);

    switch (this.selectedModule) {
      case 'video': {
        this.navCtrl.push(VideoPage, {
          'video': where,
          'level': this.levelSelected,
          'contentType': 'video',
          'index': { 'i': index, 't': this.moduleContent.length }
        });
        break;
      }

      case 'grammar': {
        this.navCtrl.push(GrammarPage, {
          'activity': where,
          'level': this.levelSelected,
          'index': { 'i': index, 't': this.moduleContent.length }
        });
        break;
      }

      case 'comprehension': {
        this.navCtrl.push(ComprehensionPage, {
          'exercise': where,
          'level': this.levelSelected,
          'index': { 'i': index, 't': this.moduleContent.length }
        });
        break;
      }

      case 'vocabulary': {
        this.navCtrl.push(VocabularyPage, {
          'words': where,
          'level': this.levelSelected,
          'index': { 'i': index, 't': this.moduleContent.length }
        });
        break;
      }

      case 'final': {
        this.navCtrl.push(FinalTestPage, {
          'test': where,
          'level': this.levelSelected,
          'index': { 'i': index, 't': this.moduleContent.length }
        });
        break;
      }
    }

    
  }


  test() {
    //console.log('test');
  }
  

  
 
}

