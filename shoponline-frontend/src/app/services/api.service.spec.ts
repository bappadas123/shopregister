import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
   private baseUrl = 'http://localhost:8080/api';
  getAbout() {
  //return this.http.get('http://localhost:8080/api/about');
  return this.http.get(`${this.baseUrl}/about`, {
      responseType: 'text'
    });
}
  getContact() {
     return this.http.get(`${this.baseUrl}/contact`, {
      responseType: 'text'
    });
}


}