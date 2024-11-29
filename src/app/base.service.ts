import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private databaseURL = "https://numbers-e18a1-default-rtdb.europe-west1.firebasedatabase.app/MyNumbers.json"
  private url =  "http://localhost:3000/MyNumbers/"
  constructor(private http:HttpClient) { }

  getMyNumbers(){
    return this.http.get(this.databaseURL)
  }
}
