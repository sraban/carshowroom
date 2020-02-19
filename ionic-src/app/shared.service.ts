import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SharedService {
  private public_path:any = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  postCurl(url, data) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post(this.public_path+url, data, httpOptions);
   }

   getCurl(url) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.get(this.public_path+url, httpOptions);
   }

   uploadPic(url, data) {   
      return this.http.post(this.public_path+url, data);
   }
}