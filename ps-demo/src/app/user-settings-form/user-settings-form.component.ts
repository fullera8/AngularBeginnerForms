import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  //Validation method that triggers only after the form submits
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      r => console.log('success: ', r),
      e => console.log('Error: ', e)
    );
  }

  //Demo that any custom front end can happen when the field blurs
  onBlur(field: NgModel) {
    console.log("in onBlur", field.valid);
  }
}
