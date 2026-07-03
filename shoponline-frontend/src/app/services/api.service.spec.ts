import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  getAbout() {
  return this.http.get('http://localhost:8080/api/about');
}
  getContact() {
  return this.http.get('http://localhost:8080/api/about');
}


}