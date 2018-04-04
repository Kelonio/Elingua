import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({  
  templateUrl: 'modal-quiz.html'
})
export class ModalQuiz {

  questions = [{ id: 1, text: 'Translate rabbit', answers: [{ id: 'Gato' }, { id: 'Conejo' }, { id: 'Perro' }] },
    { id: 2, text: 'Past sentence of read 2', answers: [{ id: 'readed' }, { id: 'reading' }, {id : 'read'}] }
  ]
  surveyForm: any;

  constructor(public viewCtrl: ViewController, private formBuilder: FormBuilder) {
    /*
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });*/

    this.surveyForm = this.formBuilder.group({
      questions: formBuilder.array([])
    })

    for (var i = 0; i < this.questions.length; i++) {
      // get multiple
      let question = formBuilder.group({
        question_id: [this.questions[i].id, Validators.required],
        answer_ids: formBuilder.array([])
      });
      this.surveyForm.controls['questions'].push(question);
    }

  }

  private todo: FormGroup;


  dismiss() {
    this.viewCtrl.dismiss();
  }

  onChange(id, isChecked, index) {
    const answers = <FormArray>this.surveyForm.controls.questions.controls[index].controls.answer_ids

    if (isChecked) {
      answers.push(new FormControl(id))
    } else {
      let idx = answers.controls.findIndex(x => x.value == id)
      answers.removeAt(idx)
    }
  }

}

