import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'number-trivia',
  templateUrl: './number-trivia.component.html',
  styleUrls: ['./number-trivia.component.scss'],
})
export class NumberTriviaComponent {
  inputNumber: number = 0;
  triviaMessage: string = ''; // Specify the type as string

  constructor(private httpClient: HttpClient) {}

  getNumberTrivia() {
    if (this.inputNumber) {
      const apiUrl = `http://numbersapi.com/${this.inputNumber}`;

      this.httpClient
        .get(apiUrl, { responseType: 'text' }) // Set the responseType to 'text'
        .pipe(
          catchError((error) => {
            console.error('Error fetching trivia:', error);
            this.triviaMessage = 'An error occurred while fetching trivia.';
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.triviaMessage = data; // Data is now a string
        });
    } else {
      this.triviaMessage = '';
    }
  }
}
