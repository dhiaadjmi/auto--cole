import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-uploadquiz',
  templateUrl: './uploadquiz.component.html',
  styleUrls: ['./uploadquiz.component.css']
})
export class UploadquizComponent {
  constructor(private router: Router) { }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
