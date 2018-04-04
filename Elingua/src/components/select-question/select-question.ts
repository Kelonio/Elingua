import { Component, ViewChild ,Input} from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';

import { NavController } from 'ionic-angular';

import { QuizData } from '../.././providers/quiz-data';
import { ResultModal } from '../result/result';

@Component({
  selector: 'question-select',
  templateUrl: 'select-question.html',
  providers: [QuizData]
})
export class SelectQuestionComponent {    

   
    @Input() question: any;
  
    constructor(public navCtrl: NavController, public dataService: QuizData, public modalCtrl: ModalController) {
      
    }

    ngOnInit() {     

     }

	  

    /* harcodeado hacer bien , mirar kk*/
    corregir() {

      let results = { 'results': { 'total': 10, 'right': 8, 'noanswered': 0 } }
      let modal = this.modalCtrl.create(ResultModal, results);
      modal.present();

    }
	 

	
 
}
