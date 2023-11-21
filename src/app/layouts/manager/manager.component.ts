import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private route:Router) {



 }



  ngOnInit(): void {
  }



}
