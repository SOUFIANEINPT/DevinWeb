import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SendDataService {

  constructor(private http:HttpClient) { }
  Send(Data:FormData) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return  this.http.post('http://localhost:8000/api/login',Data, {
        observe: 'body',
        responseType: 'json'
      })
    }
}
