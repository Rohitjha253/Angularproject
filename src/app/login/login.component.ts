import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string="";
  email: string ="";
  password: string="";

  constructor(private http: HttpClient, private router: Router) {}

  onEmployer() {
  
    this.router.navigate(['/employer']);
  }

  onCandidate() {
  
    this.router.navigate(['/candidate']);
  }

  loginUser() {
    
      this.http.post<any>('http://localhost:3000/users', { name: this.name, email:this.email, password: this.password }).subscribe(response => {
        if (response && response.token) {
        
          localStorage.setItem('token', response.token);
          
          // this.router.navigate(['/home']);
        } else {
          
          alert(response.message);
        }
      });
    }
    
}


