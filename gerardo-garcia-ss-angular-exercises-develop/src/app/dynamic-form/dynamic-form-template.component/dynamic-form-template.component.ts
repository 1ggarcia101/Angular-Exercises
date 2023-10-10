import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'dynamic-form-template',
  templateUrl: './dynamic-form-template.component.html',
  styleUrls: ['./dynamic-form-template.component.scss']
})
export class DynamicFormTemplateComponent {
  form: FormGroup | undefined;
  person: Record<string, any> = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps: string[] = [];

  ngOnInit() {
    const formDataObj: Record<string, FormControl> = {};
    const personProps = Object.keys(this.person);

    for (const prop of personProps) {
      formDataObj[prop] = new FormControl(this.person[prop]);
    }

    this.form = new FormGroup(formDataObj);
    this.personProps = personProps;
  }
}