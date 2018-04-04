import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserData } from '../../.././providers/user-data'

@Component({
  selector: 'page-final-test',
  templateUrl: 'final-test.html',
  providers: [UserData]
})
export class FinalTestPage {

  public level: any;
  public questionType: string = '';
  public test: any;
  public index: any;
  public content: any;
  
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public userData: UserData
  ) {

    this.level = this.navParams.get('level');
    this.test = this.navParams.get('test');

    console.log('test');
    console.log(this.test);

    this.questionType = this.test['type'];
    this.index = this.navParams.get('index'); // para saber cual es el numero del ejericio seleccionado ejemplo  3/8

    if (this.questionType == 'container') { // aqui son todas container
      this.content = this.test['content'];     
    }

    
  }

 
 
}
