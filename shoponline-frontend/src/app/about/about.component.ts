import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

aboutData = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAbout().subscribe(data => {
      this.aboutData = data;
    });
  }
}
