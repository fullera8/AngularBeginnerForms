import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  //One way data binding to the interface
  originalUserSettings: UserSettings = {
    name: "Alex",
    subscribeEmail: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: "notes notes notes..."
  };

  //clones originalUserSettings
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
