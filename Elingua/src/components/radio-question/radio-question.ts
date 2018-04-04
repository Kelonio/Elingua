import { Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';

import { QuizData } from "../../providers/quiz-data";
import { ResultModal } from '../result/result';


@Component({
  selector: 'question-radio',
  templateUrl: 'radio-question.html',
  providers: [QuizData] 
})
export class RadioQuestionComponent {   

   
    @Input() question: any;
    @Input() isContained: boolean = false;

    @Output() nextEvent = new EventEmitter<string>();

    public questionData: any;

  
    constructor(public alertCtrl: AlertController, public dataService: QuizData, public modalCtrl: ModalController) {      
    }

    ngOnInit() {     

      this.dataService.loadQuestionDataJson(this.question['file-json']).then((data) => {
        console.log('data');
        console.log(data);
        this.questionData = data;
      });
      
    }


    ngAfterContentInit() {

    }
	  
    /* harcodeado hacer bien , mirar kk*/
    corregir() {

      let results = { 'results': { 'total': 10, 'right': 8, 'noanswered': 0 } }
      let modal = this.modalCtrl.create(ResultModal, results);
      modal.present();

    }

    emitNextEvent() {
      this.nextEvent.emit('next');
    }
}
