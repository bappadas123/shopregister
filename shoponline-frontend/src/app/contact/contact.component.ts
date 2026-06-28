import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   contactData = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getContact().subscribe(data => {
      this.contactData = data;
    });
  }

}
