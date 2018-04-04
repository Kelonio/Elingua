import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'safeHtml' })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

//@Pipe({ name: 'safeHtml' })
//export class Safe {
//  constructor(private sanitizer: Sanitizer) { }

//  transform(style) {
//    //return this.sanitizer.bypassSecurityTrustStyle(style);
//     return this.sanitizer.bypassSecurityTrustHtml(style);
//    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
//  }
//}
