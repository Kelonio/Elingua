import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuizData } from '../../.././providers/quiz-data';

/*
  Generated class for the comprehension page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-comprehension',
    templateUrl: 'comprehension.html',
    providers: [QuizData]
})
export class ComprehensionPage {

  public questions: any;
  public questionType: string = '';
  public exercise: any;
  public questionData: any;
  public level: any;
  public index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: QuizData) {

    this.level = this.navParams.get('level');
    
   

  }

    ionViewDidLoad() {


      this.exercise = this.navParams.get('exercise');
      this.questionType = this.exercise['type'];

      this.index = this.navParams.get('index'); // para saber cual es el numero del ejericio seleccionado ejemplo  3/8 
     
       

      //if (this.questionType == 'dropwords' ) {

      //  this.dataService.loadQuestionDataJson(this.exercise['file-json']).then((data) => {
      //    console.log(data);
      //    this.questionData = data;
      //  });
      //}

      if (this.questionType == 'quiz') {        

        this.dataService.loadQuestionJson(this.exercise['file-json']).then((data) => {

            //dataAux = data;
            //data.map((question) => {

            //  let originalOrder = question.answers;
            //  question.answers = this.randomizeAnswers(originalOrder);
            //  return question;

            //});

            this.questions = data;

          });
      }

      

      
    }

    //randomizeAnswers(rawAnswers: any[]): any[] {

    //  for (let i = rawAnswers.length - 1; i > 0; i--) {
    //    let j = Math.floor(Math.random() * (i + 1));
    //    let temp = rawAnswers[i];
    //    rawAnswers[i] = rawAnswers[j];
    //    rawAnswers[j] = temp;
    //  }

    //  return rawAnswers;

    //}

}
