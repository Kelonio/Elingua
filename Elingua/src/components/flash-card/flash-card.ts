import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  //flipped: boolean = false;

  @Input('isFlipped') flipCard: boolean;
  @Input('isSucced') isSucced: boolean;

  constructor() {

  }

  //flip() {
  //  console.log('flipeando');
  //  this.flipped = !this.flipped;
  //}

}
