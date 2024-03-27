import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [ FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})

export class MedicineComponent implements OnInit {

  drugObj: Drug;

  Patients: any;

  patientId: number | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.drugObj = new Drug();
  }

  ngOnInit(): void {
    // Retrieve the patient ID from the route parameters
    this.route.params.subscribe(params => {
      this.patientId = +params['patientId']; // '+' is used to convert string to number
      // Now you can use this.patientId to fetch patient details or perform any other operation
      console.log(this.patientId);
      console.log('Request URL:', `http://localhost:8081/patient/details/${this.patientId}`); // Log the constructed URL 

      this.getParticularPatientDetails();
      this.drugObj.patient.id = this.patientId ;
    });

  }


  getParticularPatientDetails(): void {
    const url = `http://localhost:8081/patient/details/${this.patientId}`;  //(` `) quotes VVIMP
    this.http.get<any[]>(url).subscribe((data: any[]) => {
      console.log(data);
      this.Patients = data;
    });
  }

  addDrugs() {
    this.http.post('http://localhost:8081/drug/addPatientDrug', this.drugObj).subscribe((res: any) => {
      console.log(res);
      if (res.result) {
        alert("Data Saved SuccessFully");
      } else {
        alert("Data Not Saved")
      }
    })
  }

}

export class Drug {
  tabletName: string;
  days: number;
  mg: number;
  quantity: number;
  comments: string;
  patient: { id: number };

  constructor() {
    this.tabletName = '';
    this.days = 0;
    this.mg = 0;
    this.quantity = 0;
    this.comments = '';
    this.patient = { id: 0 };
  }

}
