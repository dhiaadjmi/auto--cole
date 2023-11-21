import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizcandidatlist',
  templateUrl: './quizcandidatlist.component.html',
  styleUrls: ['./quizcandidatlist.component.css']
})
export class QuizcandidatlistComponent {
  constructor(private route: Router) { }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
