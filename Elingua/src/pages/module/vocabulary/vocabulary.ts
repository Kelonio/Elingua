import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

import { UserData } from '../../.././providers/user-data';

import { QuizData } from '../../.././providers/quiz-data';



@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
  providers: [UserData, QuizData]
})
export class VocabularyPage {

  public question: any;
  public questionType: string = '';
  public level: any;
  public index: any;
  public words: any;

  public title: string;
  public lesson: string;


 
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public userData: UserData,
      public dataService: QuizData,     
      public alertCtrl: AlertController,
  ) {

    this.level = this.navParams.get('level');
    this.words = this.navParams.get('words');

    
    
    this.questionType = this.words['type'];

    //console.log(this.questionType);
    //console.log(this.level);
    /* ahora se pueden meter libros en vocabulary */
    if (this.questionType == 'book') {
      this.dataService.loadQuestionDataJson(this.words['file-json']).then((data) => {
        this.title = data['title'];
        this.lesson = data['lessonHtml'].join(' ');
      });
    }else if (this.questionType == 'select') {
      this.dataService.loadQuestionDataJson(this.words['file-json']).then((data) => {
        //console.log(data);
        this.question = data;
      });     
    }
    else {
      this.question = this.words;
    }
  }

  ionViewDidLoad() {
    this.index = this.navParams.get('index'); // para saber cual es el numero del ejericio seleccionado ejemplo  3/8
    
  }
 
}
