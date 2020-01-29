import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  addJson(data) {
    return this.http.post(this.baseurl+"/json", data, this.httpOptions).toPromise();
  }

  addDTO(data) {
    return this.http.post(this.baseurl+"/dto", data, this.httpOptions).toPromise();
  }

  updateDTO(data) {
    return this.http.put(this.baseurl+"/dto/"+data._id, data, this.httpOptions).toPromise();
  }
  listDTOs() {
    return this.http.get(this.baseurl+"/dtos").toPromise();
  }


}
