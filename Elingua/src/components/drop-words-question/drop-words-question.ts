import { Component, ViewChild, Input,Output,EventEmitter, ElementRef} from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { ResultModal } from '../result/result';

import { QuizData } from "../../providers/quiz-data";



@Component({
  selector: 'question-drop-words',
  templateUrl: 'drop-words-question.html',
  providers: [QuizData]
})
export class DropWordsQuestionComponent {    

   
  //@Input() data: any;
  public data: any;
  @Input() question: any;
  
     
    public questionHtml: string = '';
    public wordsHtml: string = '';
    public description: string = '';
    public isClicked: boolean = false;

    private drakeInitialiced: boolean = false;
    private correctAnswer: number = 0;

  
    constructor(public navCtrl: NavController,
                private dragulaService: DragulaService,
                public alertCtrl: AlertController,
                private elRef: ElementRef,
                public modalCtrl: ModalController,
                public dataService: QuizData)
    {
     
      /* esto es para que solo se pueda poner uno por target,
         no acepta si tienen mas de un children, en el caso
         de la pregunta si se puede poner mas de uno */
      if (!this.dragulaService.find('prueba')) {
          dragulaService.setOptions('prueba', {
            removeOnSpill: false,
            accepts: function (el, target, source, sibling) {
              if (target.id == 'pregunta') return true;
              return (target.children.length < 1);
            }
          });
      }
    }

    /* ver  http://almerosteyn.com/2016/03/immutable-component-input-from-observable */
    /* como el imput es una promesa , hay que vigilar cuando cambia */
    //ngOnChanges(changes: any): void {
    //  var dataChange = changes.data.currentValue;
    //  if (dataChange) {
    //    this.questionHtml = dataChange.questionHtml.join(' '); // esto es un join porque questionHtml es un array con el html por reabilidad
    //    this.wordsHtml = '<div class="drag-word">' + dataChange.words.join('</div><div class="drag-word">')+'</div>';
    //    this.description = dataChange.description;
    //  }
    //}

    /* Respond after Angular checks the component's views and child views / the view that a directive is in.
       Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().*/ 

    ngAfterViewChecked() {
      /* si  hay un solo cambio , hay que gestionar si hay mas */
      if (this.drakeInitialiced==false)
          this.initializateDrake();           
    }


    ngOnInit() {

      console.log('cuestion tiene valor');
      console.log(this.question);

      this.dataService.loadQuestionDataJson(this.question['file-json']).then((data) => {
        console.log('data');
        console.log(data);
        this.data = data;
        this.questionHtml = this.data.questionHtml.join(' '); // esto es un join porque questionHtml es un array con el html por reabilidad
        this.wordsHtml = '<div class="drag-word">' + this.data.words.join('</div><div class="drag-word">') + '</div>';
        this.description = this.data.description;
      });

    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {           
    }

    initializateDrake() {
        var drake = this.dragulaService.find('prueba').drake;
        /* aqui vamos a cascar los dragula */


        
        /* using document : This definitely works. However it is considered bad practice to access elements outside the component directly such as in this case the global document object.
           https://juristr.com/blog/2016/09/ng2-event-registration-document/
        */
        var removeListener: any;

        drake.on('drag', (el, source) => {
          console.log('drageando');
          // On mobile this prevents the default page scrolling while dragging an item.
          removeListener = document.addEventListener('touchstart', function (e) {
            e.preventDefault();
          });
        })


        drake.on('drop', (el, source) => {
          console.log('dropeando');
          // On mobile this prevents the default page scrolling while dragging an item.
          // On mobile this turns on default page scrolling after the end of a drag drop.
          document.removeEventListener('touchstart', removeListener);
        })



        //create a new HTMLElement from nativeElement
        var hElement: HTMLElement = this.elRef.nativeElement;

        //now you can simply get your elements with their class name
        var elements = hElement.getElementsByClassName('box');
        const MyArray = Array.from(elements);

        for (var e of MyArray) {
          //console.log(e);
          drake.containers.push(e);
          this.drakeInitialiced = true;
        }

    }

    /* harcodeado hacer bien , mirar kk*/
    corregir() {

      // paramos video
      console.log('paramos video')
      var videos = document.getElementsByTagName("video");
      for (var i = 0; i < videos.length; i++) { var video = videos[i]; video["pause"](); }


      let results = { 'results': { 'total': 10, 'right': 2, 'noanswered': 10 } }
      let modal = this.modalCtrl.create(ResultModal, results);
      modal.present();



      //let alert = this.alertCtrl.create({
      //  title: 'Corregido',
      //  subTitle: 'Puntuacion 5 de 7',
      //  buttons: ['OK']
      //});
      //alert.present();

    }

    corregir_kk() {

      let regions = this.dragulaService.find('prueba').drake.containers;
      //console.log('dragula regions');
      //console.log(regions);

      this.correctAnswer = 0

      regions.forEach(r => {

        //console.log(r.getAttribute('data-solution') + '==' + r.innerText);


        let solucion = r.innerText || ''; 

        if (r.id != 'pregunta') {
          if (r.getAttribute('data-solution').toString().trim() == r.innerText.toString().trim()) {
            this.correctAnswer++;
            r.style.color = 'green';
          } else
            r.style.color = 'red';
        }     
       


        //if (r.id == 'box1') {
        //  console.log('he encontrado la respuesta 1');
        //  console.log(r.innerText);
        //}

      });


      let alert = this.alertCtrl.create({
        title: 'Corregido',
        subTitle: 'Puntuacion ' + this.correctAnswer + ' correctas de ' + (regions.length -1),
        buttons: ['OK']
      });
      alert.present();

    }


    

	
 
}
