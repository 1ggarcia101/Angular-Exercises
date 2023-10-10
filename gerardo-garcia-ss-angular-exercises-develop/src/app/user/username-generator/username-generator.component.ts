import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'username-generator',
  templateUrl: './username-generator.component.html',
  styleUrls: ['./username-generator.component.scss'],
})
export class UsernameGeneratorComponent {
  usernameForm: FormGroup;
  generatedUsername: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.usernameForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
    });

    // Subscribe to form value changes to generate the username dynamically
    this.usernameForm.valueChanges.subscribe(() => this.generateUsername());
  }

  generateUsername() {
    if (this.usernameForm.valid) {
      const { firstName, lastName } = this.usernameForm.value;
      const randomInt = Math.floor(Math.random() * 1000); // Generate a random integer
      this.generatedUsername = `${firstName}_${lastName}_${randomInt}`;
    } else {
      this.generatedUsername = ''; // Clear the generated username if form is invalid
    }
  }
}
