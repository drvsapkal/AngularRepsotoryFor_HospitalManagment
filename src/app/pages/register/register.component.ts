import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  patientobj : patient

  constructor(){
    this.patientobj = new patient();
  }
}

export class patient {
  firsName: string;
  emailId: string;
  date: string;
  city: string;
  mobileNumber: number;
  
  constructor(){
    this.firsName = '';
    this.emailId = '';
    this.date = '';
    this.city = '';
    this.mobileNumber = 0;
  }
}