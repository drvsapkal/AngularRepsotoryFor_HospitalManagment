import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.getPatientsDetails();
  }

  Patients: any[] = [];

  constructor(private http: HttpClient) {
  }

  getPatientsDetails(): void {
    const url = 'http://localhost:8081/patient/details';
    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.Patients = data;
    });
  }

}
