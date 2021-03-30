import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>
  {
    //IMPORTANT: This is how you make the API calls, change "URL" to the server URL
    return this.http.post('URL', userSettings);
    //return of(userSettings);
  }
}
