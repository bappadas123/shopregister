import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

aboutData = '';
private apiService = inject(ApiService);

  

  ngOnInit() {
    this.apiService.getAbout().subscribe(data => {
      this.aboutData = data;
    });
  }
}
