import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizData {

  data: any;
  dataTest: any[];

    constructor(public http: Http) {
      //console.log('Hello quiz data Provider');
      this.data = null;
      this.dataTest = null;

    }

    load() {

      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

        this.http.get('assets/jsons/questions.json').map(res => res.json()).subscribe(data => {
          this.data = data.questions;
          resolve(this.data);
        });

      });

    }

    loadTest() {      

      if (this.dataTest) {
        return Promise.resolve(this.dataTest);
      }

      return new Promise(resolve => {

        this.http.get('assets/jsons/questions-test.json').map(res => res.json()).subscribe(data => {
          this.dataTest = data.questions;
          resolve(this.dataTest);
        });

      });

    }

    loadQuestionSelect() {
      return new Promise(resolve => {

        this.http.get('assets/jsons/question-select.json').map(res => res.json()).subscribe(data => {          
          resolve(data);
        });

      });
    }


    loadQuestionJson(file) {

      //if (this.dataTest) {
      //  return Promise.resolve(this.dataTest);
      //}

      return new Promise(resolve => {

        this.http.get('assets/jsons/'+ file ).map(res => res.json()).subscribe(data => {
          this.dataTest = data.questions;
          resolve(this.dataTest);
        });

      });

    }


    loadQuestionDataJson(file) {
      return new Promise(resolve => {
        this.http.get('assets/jsons/' + file).map(res => res.json()).subscribe(data => {          
          resolve(data);
        });
      });
    }

}
