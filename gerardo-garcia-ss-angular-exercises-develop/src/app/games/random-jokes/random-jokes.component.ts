import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-jokes',
  templateUrl: './random-jokes.component.html',
  styleUrls: ['./random-jokes.component.scss'],
})
export class RandomJokesComponent implements OnInit {
  joke: any; // Define a property to store the fetched joke

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke() {
    // Fetch a random joke from the API
    this.httpClient.get('https://official-joke-api.appspot.com/random_joke').subscribe(
      (response) => {
        // Handle a successful response here
        this.joke = response;
      },
      (error) => {
        // Handle errors here
        console.error('Error fetching random joke:', error);
      }
    );
  }
}

