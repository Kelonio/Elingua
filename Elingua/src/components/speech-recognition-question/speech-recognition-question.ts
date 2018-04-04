import { Component, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import { QuizData } from '../.././providers/quiz-data';

import { SpeechRecognition } from '@ionic-native/speech-recognition';



@Component({
  selector: 'question-speech-recognition',
  templateUrl: 'speech-recognition-question.html',
  providers: [QuizData]
})
export class SpeechRecognitionQuestionComponent {

  matches: String[];
  isRecording = false;

  @Input() exercise: any;

  public sentence: string = '';
  public sentences: any;
  public sentenceIndex: number = 0;
  public sentenceRightCounter: number = 0;
  public hasPermission: boolean;
  public isClicked: boolean = false;
  public difficulty: number[] = [5, 4, 3, 2, 1];
  public difficultySelected: number = 1;
  public options :any;
  public levelSelected: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public dataService: QuizData,
    private speechRecognition: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef) {

    this.levelSelected = this.navParams.get('level');

    if (this.hasPermission) {
      this.hasPermission = true;
    } else {
      this.hasPermission = false;
    }

  }

  ngOnInit() {
    this.dataService.loadQuestionDataJson(this.exercise['file-json']).then((data) => {
      this.sentences = data['sentences'];
      this.sentence = this.sentences[this.sentenceIndex];
    });
  }

  nextSentence() {
    this.sentenceIndex = this.sentenceIndex + 1;
    this.sentence = this.sentences[this.sentenceIndex];
    this.matches = [];
  }

  previousSentence() {
    this.sentenceIndex--;
    this.sentence = this.sentences[this.sentenceIndex];
    this.reload();
  }

  isIos() {
    return this.plt.is('ios');
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
    this.isClicked = false;
  }

  startListening() {    /*lo que se haga aqui, cuando funcione hacer en startListeningIos()*/

    if (this.hasPermission) {

      this.options = { language: 'en-US', prompt: this.sentence };

      this.speechRecognition.startListening(this.options).subscribe(matches => {
        this.matches = matches;
        this.checkMatch();
        this.cd.detectChanges();
      });
      this.isRecording = true;
    }

    else {
      this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          this.hasPermission = hasPermission;
          if (!hasPermission) {
            this.speechRecognition.requestPermission();
          }
        });

      this.options = { language: 'en-US', prompt: this.sentence };

      this.speechRecognition.startListening(this.options).subscribe(matches => {
        this.matches = matches;
        this.checkMatch();
        this.cd.detectChanges();
      });
      this.isRecording = true;
    }

  }

  startListeningios() {

    if (this.hasPermission) {
      this.isClicked = true;

      this.speechRecognition.startListening(this.options).subscribe(matches => {
        this.matches = matches;
        this.checkMatch();
        this.cd.detectChanges();
      });


    } else {
      this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          this.hasPermission = hasPermission;
          if (!hasPermission) {
            this.speechRecognition.requestPermission();
          }
          this.hasPermission = true;
        });

      this.isClicked = true;

      this.speechRecognition.startListening(this.options).subscribe(matches => {
        this.matches = matches;
        this.checkMatch();
        this.cd.detectChanges();
      });
    }
  }

  checkMatch() {
    let title = "";
    let subtitle = "";

    //Original de Alfonso
    //if (this.matches[this.sentenceIndex].toUpperCase() == this.sentence.toUpperCase().replace('?', '')) {

    //Para comparar solo con el primer resultado
    //if (this.matches[0].toUpperCase() == this.sentence.toUpperCase().replace('?', '')) {

    //Para comparar contra todo el array de matches
    //if (this.matches.filter(x => x.toUpperCase() == this.sentence.toUpperCase().replace('?', '')).length > 0) {  


    //Para elegir rango de dificultad.
    //De menor dificultad (compara contra los 5 resultados del array) a mayor dificultad (compara contra el primero).
    if (this.matches.slice(0, this.difficulty[this.difficultySelected - 1]).filter(x => x.toUpperCase() == this.sentence.toUpperCase().replace('?', '')).length > 0) {
      title = "Correct";
      if (this.sentenceIndex + 1 == this.sentences.length)
        subtitle = 'Well done! Let´s check your results';
      else
      subtitle = 'Good job! Let´s go for the next';
      this.sentenceRightCounter++;
      this.nextSentence();
    }
    else {
      title = "Incorrect";
      subtitle = 'Upps! Try again';
    }

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  reload() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.matches = [];
  }
}
