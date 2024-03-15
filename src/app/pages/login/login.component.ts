import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('http://localhost:8081/doctor/login', this.loginObj).subscribe((res: any) => {
      console.log(res);
      if (res !=null ){ 
        alert("Login Success");
        localStorage.setItem('loggedInDoctorId', JSON.stringify(res));
        this.router.navigateByUrl("/dashboard")
      } else {
        alert(res.message)
      }
    })

  }

  doRegistration(){
    this.http.post('http://localhost:8081/doctor/register', this.loginObj).subscribe((res: any) => {
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

export class Login {
  userName: string;
  passWord: string;
  name: string;
  cell_no: number;
  sector: string;
  gender: string;
  address: string;

  constructor() {
    this.userName = '';
    this.passWord = '';
    this.name = '';
    this.cell_no = 0;
    this.sector = '';
    this.gender = '';
    this.address = '';
  }
}