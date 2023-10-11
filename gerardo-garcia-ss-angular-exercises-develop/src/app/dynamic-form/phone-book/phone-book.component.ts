import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {
  contacts: Contact[] = [];
  sortedContacts: Contact[] = [];
  newContact: Contact = { firstName: '', lastName: '', phoneNumber: '' };
  sortKey: string = '';
  sortAscending: boolean = true;

  addContact() {
    this.contacts.push({ ...this.newContact });
    this.sortContacts();
    this.newContact = { firstName: '', lastName: '', phoneNumber: '' };
  }

  sort(key: string) {
    if (key === this.sortKey) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortKey = key;
      this.sortAscending = true;
    }
    this.sortContacts();
  }

  getSortIcon(key: string) {
    if (key === this.sortKey) {
      return this.sortAscending ? 'fa-sort-asc' : 'fa-sort-desc';
    } else {
      return '';
    }
  }

  private sortContacts() {
    this.contacts.sort((a, b) => {
      if (a[this.sortKey] < b[this.sortKey]) {
        return this.sortAscending ? -1 : 1;
      } else if (a[this.sortKey] > b[this.sortKey]) {
        return this.sortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  [key: string]: any; // Index signature that allows any property to be accessed by a string key
}

