import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [ HttpClientModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {

  Patients: any[] = [];

  patientId: number | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the patient ID from the route parameters
    this.route.params.subscribe(params => {
      this.patientId = +params['patientId']; // '+' is used to convert string to number
      // Now you can use this.patientId to fetch patient details or perform any other operation
      console.log(this.patientId);
      console.log('Request URL:', `http://localhost:8081/patient/details/${this.patientId}`); // Log the constructed URL

      this.getParticularPatientDetails();
    });
   
  }
 
  
  getParticularPatientDetails(): void {
    const url = 'http://localhost:8081/patient/details/this.patientId';
    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.Patients = data;
    });
  }
  addDrugs(){}
}
