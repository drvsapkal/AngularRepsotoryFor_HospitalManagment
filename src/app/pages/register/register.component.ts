import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  patientobj : patient

  constructor(private http:HttpClient, private router: Router){
    this.patientobj = new patient();
  }

  bookAppointment(){
    this.http.post('http://localhost:8081/patient/add', this.patientobj).subscribe((res: any) => {
      console.log(res);
      if (res.result) {
        alert(res.message);
        this.router.navigateByUrl("/dashboard")
      } else {
        alert(res.message)
      }
    })
  }

}

export class patient {
  firsName: string;
  emailId: string;
  date: Date;
  city: string;
  mobileNumber: number;
  
  constructor(){
    this.firsName = '';
    this.emailId = '';
    this.date = new Date;
    this.city = '';
    this.mobileNumber = 0;
  }
}