import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes() {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>
  {
    //IMPORTANT: This is how you make the API calls, change "URL" to the server URL
    return this.http.post('https://putsreq.com/oPraa0e3wQiAixF7I9zH', userSettings);
    //return of(userSettings);
  }
}
