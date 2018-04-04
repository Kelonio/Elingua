import { Component, ViewChild ,Input} from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuizData } from '../.././providers/quiz-data'



@Component({
  selector: 'question-quiz',
  templateUrl: 'quiz-question.html',
  providers: [QuizData]
})
export class QuizQuestionComponent {

  @ViewChild('slides') slides: any;
  @Input() questions: any;

    hasAnswered: boolean = false;
    score: number = 0;

    slideOptions: any;
    

    constructor(public navCtrl: NavController, public dataService: QuizData) {
      //console.log('Constructor QuizQuestionComponent');
    }

    ngOnInit() {

        this.slides.lockSwipes(true); 


        //console.log('question en quiz questions');
        //console.log(this.questions);


      //this.dataService.load().then((data) => {

      //  data.map((question) => {

      //    let originalOrder = question.answers;
      //    question.answers = this.randomizeAnswers(originalOrder);
      //    return question;

      //  });

      //  this.questions = data;

      //  console.log('question en quiz questions');
      //  console.log(this.questions);


      //});


    }

	  nextSlide(){
		  this.slides.lockSwipes(false);
		  this.slides.slideNext();
		  this.slides.lockSwipes(true);
	  }

	  selectAnswer(answer, question){

		  this.hasAnswered = true;
		  answer.selected = true;
		  question.flashCardFlipped = true;

		  if(answer.correct){
			  this.score++;
		  }

		  setTimeout(() => {
			  this.hasAnswered = false;
			  this.nextSlide();
			  answer.selected = false;
			  question.flashCardFlipped = false;
      }, 3000);

      var videos = document.getElementsByClassName("videoPlayer");

      for (let i = 0; i < videos.length; i++) {
        var video = videos[i]; video["pause"]();
      }
	  }

	  randomizeAnswers(rawAnswers: any[]): any[] {

		  for (let i = rawAnswers.length - 1; i > 0; i--) {
		      let j = Math.floor(Math.random() * (i + 1));
		      let temp = rawAnswers[i];
		      rawAnswers[i] = rawAnswers[j];
		      rawAnswers[j] = temp;
		  }

		  return rawAnswers;

	  }

	  restartQuiz() {
		  this.score = 0;
		  this.slides.lockSwipes(false);
		  this.slides.slideTo(1, 1000);
		  this.slides.lockSwipes(true);
	  }
 
}
