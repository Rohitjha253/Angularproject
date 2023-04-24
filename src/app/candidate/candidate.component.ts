import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  
  data  :any;

  constructor(private http: HttpClient) {}

  onSuccess(){
     alert("Job Applied Successfully");
  }


  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/Jobs')
      .subscribe(data => {
        this.data = data;
        console.log(data);
        
      });
  } 
}
