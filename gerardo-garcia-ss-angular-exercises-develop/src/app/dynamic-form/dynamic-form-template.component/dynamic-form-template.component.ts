import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'dynamic-form-template',
  templateUrl: './dynamic-form-template.component.html',
  styleUrls: ['./dynamic-form-template.component.scss']
})
export class DynamicFormTemplateComponent {
  form: FormGroup;
  person: Record<string, any> = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps: string[] = [];

  ngOnInit() {
    // Define the default values for the person object
    this.person = {
      firstname: 'Coder',
      age: 25,
      lastname: 'Byte',
      twitter: '@coderbyte'
    };

    // Create form controls based on the person object properties
    const formDataObj: Record<string, FormControl> = {};
    const personProps = Object.keys(this.person);

    for (const prop of personProps) {
      formDataObj[prop] = new FormControl(this.person[prop]);
    }

    this.form = new FormGroup(formDataObj);
    this.personProps = personProps;
  }

  constructor() {
    this.form = new FormGroup({});
    this.initializeFormControls();
  }

  private initializeFormControls(): void {
    for (const prop of this.personProps) {
      this.form.addControl(prop, new FormControl(this.person[prop]));
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }

  modifyPerson() {
    // Modify the 'person' object to demonstrate dynamic form fields
    this.person = {
      firstname: 'Updated',
      age: 30,
      lastname: 'User',
      twitter: '@updateduser'
    };
    this.onPersonChange();
  }

  onPersonChange() {
    this.initializeFormControls();
  }
}
