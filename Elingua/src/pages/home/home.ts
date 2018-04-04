import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { QuizPage } from '.././quiz/quiz';
import { LevelPage } from '.././level/level';
import { DedicationPage } from '.././dedication/dedication';

import { UserData } from '../.././providers/user-data'




import { ModalQuiz } from './modal-quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserData]
})
export class HomePage {

  private data: any;

  constructor(
    public navCtrl: NavController,
    private userData: UserData,
    public modalCtrl: ModalController) {
      
  }

  ionViewDidLoad () {
    this.userData.getData().then(data => {
      this.data = data;
      //console.log(data);
    }) 
  }

  goToLevel(level) {
    this.navCtrl.push(LevelPage, {
      'level': level
    });
  }

  goToDedication() {
    this.navCtrl.push(DedicationPage)
  }

  startQuiz() {

    /*dejo la modal para acordarme o hacerlo asi luego 
    let modal = this.modalCtrl.create(ModalQuiz);
    modal.present();
    */
    this.navCtrl.push(QuizPage);

  }


  goToQuiz() {
    this.navCtrl.push(QuizPage);
  }

  onLink(url: string) {
      window.open(url);
  }
}
