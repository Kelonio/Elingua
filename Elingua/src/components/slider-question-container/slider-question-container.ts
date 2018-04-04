import { Component, ViewChild ,Input} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { QuizData } from '../.././providers/quiz-data'
import { ResultModal } from '../result/result';



@Component({
  selector: 'slider-question-container',
  templateUrl: 'slider-question-container.html',
  providers: [QuizData]
})
export class SliderQuestionContainerComponent {

  @ViewChild('slides') slides: any;
  @Input() questions: any;

    hasAnswered: boolean = false;
    score: number = 0;

    slideOptions: any;
    

    constructor(public navCtrl: NavController, public dataService: QuizData, public modalCtrl: ModalController) {
      
    }

    ngOnInit() {
      //this.slides.lockSwipes(true);
      console.log('questions');
      console.log(this.questions);

    }

	  nextSlide(){
		  //this.slides.lockSwipes(false);
		  this.slides.slideNext();
		  //this.slides.lockSwipes(true);
	  } 

    nextEvent(event) {
      // ponemos un pequeño timer para que no pase enseguida de pagina
      setTimeout(() => {
        this.nextSlide();
      }, 500);   

    }

    result() {
        let results = { 'results':{ 'total': 10, 'right':2, 'noanswered':10}}
        let modal = this.modalCtrl.create(ResultModal, results);
        modal.present();

    }

	  restartQuiz() {
		  this.score = 0;
		  this.slides.lockSwipes(false);
		  this.slides.slideTo(1, 1000);
		  this.slides.lockSwipes(true);
	  }
 
}
