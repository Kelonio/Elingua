import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'replaceBlanks' })
export class ReplaceBlanks {
  constructor() { }

  transform(text) {
    let aux = text.replace(/\s/g, '');
    return aux;
  }
}


