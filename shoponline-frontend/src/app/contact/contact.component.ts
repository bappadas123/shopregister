import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
   contactData = '';

 private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getContact().subscribe(data => {
      this.contactData = data;
    });
  }

}
