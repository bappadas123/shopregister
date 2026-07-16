import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);
  getAbout() {
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
