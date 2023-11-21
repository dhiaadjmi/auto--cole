import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidatformoniteur',
  templateUrl: './candidatformoniteur.component.html',
  styleUrls: ['./candidatformoniteur.component.css']
})
export class CandidatformoniteurComponent {
  constructor(private route:Router)
  {

  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
