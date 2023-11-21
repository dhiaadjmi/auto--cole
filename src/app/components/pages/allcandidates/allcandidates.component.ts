import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allcandidates',
  templateUrl: './allcandidates.component.html',
  styleUrls: ['./allcandidates.component.css']
})
export class AllcandidatesComponent {
  constructor(private route:Router)
  {

  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
