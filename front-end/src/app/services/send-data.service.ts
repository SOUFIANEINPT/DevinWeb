import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SendDataService {

  constructor(private http:HttpClient) { }
  Send(Data:FormData) {
    console.log(Data)
    let headers =  new HttpHeaders();
    headers.append('Accept', 'application/json');
    return  this.http.post('http://localhost:8000/api/trello',Data,{
        observe: 'body',
        responseType: 'json',
        headers:headers
      })
    }
}
