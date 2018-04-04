import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { UserData } from '../../.././providers/user-data';
import { QuizData } from '../../.././providers/quiz-data';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
//import { SpeechRecognition } from "ionic-native/dist/es5";



/*
  Generated class for the grammar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-grammar',
    templateUrl: 'grammar.html',
    providers: [UserData, QuizData]
})
export class GrammarPage {

  public activitySelected: string;
  public activity: any;
  public level: any;

  public questionData: any;

  public questionType: any;

  matches: String[];
  isRecording = false;

  question: any;
  lesson: string;
  title: string;
  index: any;

  grammar: any;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public userData: UserData,
      public dataService: QuizData,
      private speechRecognition: SpeechRecognition,
      private plt: Platform,
      private cd: ChangeDetectorRef
    ) {
      this.grammar = this.navParams.get('activity');
      this.level = this.navParams.get('level');     
      this.questionType = this.grammar['type'];

      /* esto esta aqui porque el ionViewLoad es demasiado tarde*/
      if (this.questionType == 'multiselect' || this.questionType == 'dropwords') {
        this.question = this.grammar;
      }
    }

    ionViewDidLoad() {

      this.index = this.navParams.get('index'); // para saber cual es el numero del ejericio seleccionado ejemplo  3/8 


      /* para el tipo leccion que era el original, ahora se pueden meter tambien preguntas */
      if (this.questionType == 'book') {
        this.dataService.loadQuestionDataJson(this.grammar['file-json']).then((data) => {
          this.title = data['title'];
          this.lesson = data['lessonHtml'].join(' ');  
        });
      } else if(this.questionType != 'multiselect') {
        
        this.dataService.loadQuestionDataJson(this.grammar['file-json']).then((data) => {
          console.log('data');
          console.log(data);
          this.question = data;
        });
      }

      
      
    }
    

     

    /* select cuestion poner algnu ejemplo */
    /*
    ionViewDidLoad() {
        console.log('ionViewDidLoad grammarPage');
        this.dataService.loadQuestionSelect().then((data) => {   
          this.question = data;
          console.log('question data');
          console.log(this.question);

        });
    }
    */
}
