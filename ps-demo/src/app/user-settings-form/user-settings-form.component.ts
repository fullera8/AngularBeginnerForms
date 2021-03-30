import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
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
  //Data variables
  postError: boolean = false;
  postErrorMessage: String = '';
  subscriptionTypes!: Observable<String[]>;
  //ngx variables
  singleModel:String = "On";
  startDate!: Date;
  startTime!: Date;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  //Demo that any custom front end can happen when the field blurs
  onBlur(field: NgModel) {
    console.log("in onBlur", field.valid);
  }

  //Error handling
  onHttpError(errorResponse: any)
  {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  //Validation method that triggers only after the form submits
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);

    // if (form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     r => console.log('Success: ', r),
    //     e => this.onHttpError(e)//console.log('Error: ', e)
    //   );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }


  }
}
