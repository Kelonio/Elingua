import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the user_data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StructureData {

    data: any;   

    
    constructor(public http: Http) {     
      this.data = null;
    }

    getStructure() {
      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
        this.http.get('assets/jsons/structure.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }

    getElinguaLevels() {
      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
        this.http.get('assets/jsons/elingua-levels.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }

    getLevel(level) {
      return new Promise(resolve => {
        this.http.get('assets/jsons/levels/'+level)
          .map(res => res.json())
          .subscribe(data => {           
            resolve(data);
          });
      });

    }

}
