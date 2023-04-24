import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  jobName: string="";
  salary: number = 0 ;
  location: string="";
  skills: string="";
  data  :any;

  sendData(data: any) {
    return this.http.post('http://localhost:5000/Jobs', data);
  }
  

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    const data={
      jobName: this.jobName,
      Salary: this.salary,
      Location: this.location,
      Skills: this.skills
    };
    this.sendData({  EmployerComponent}).subscribe(response => {
      console.log(response);
    });
    
}
}


