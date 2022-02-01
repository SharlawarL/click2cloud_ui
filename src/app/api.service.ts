import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'http://localhost:9000/'
  constructor(
    private http : HttpClient
  ) { }

  getCovidData(){
    const header = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
    return this.http.get(this.url+'covid-data',{ responseType: 'json'})
  }
}
