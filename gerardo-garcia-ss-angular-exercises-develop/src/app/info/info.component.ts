import { Component } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  ngOnInit() {
    this.flipWord();
  }

  flipWord() {
    let newWord = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    const length = Math.floor(Math.random() * 10) + 1;

    for (let counter = 0; counter < length; counter++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      newWord += characters.charAt(randomIndex);
    }

    const newReversedWord = newWord.split('').reverse().join('');

    console.log(newReversedWord);
  }
}
