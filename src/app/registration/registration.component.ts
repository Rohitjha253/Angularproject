import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  // templateUrl: './registration.component.html',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   name: string ="";
   email: string ="";
   password: string="";

  constructor(private http: HttpClient, private router: Router) {}
  
  
  onRegister() {
  
    this.router.navigate(['/login']);
  }
  


  registerUser() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.http.post('http://localhost:5000/register', data)
    .subscribe(response => {
      console.log(response);
        this.router.navigate(['/login']);
      });
  }

  

}



