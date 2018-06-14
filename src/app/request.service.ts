import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  public respondedOnce = false;
  public result: any;
  public apiResponded = false;


  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }
}
