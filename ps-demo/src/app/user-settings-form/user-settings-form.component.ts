import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  //One way data binding to the interface
  originalUserSettings: UserSettings = {
    name: null,
    subscribeEmail: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  //clones originalUserSettings
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
