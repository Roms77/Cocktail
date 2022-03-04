import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }
  
  getApiData<Object>( url:string ) {
    return this.http.get( url );
  }

}
