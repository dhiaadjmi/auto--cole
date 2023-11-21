
import { Component,OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";
@Component({
  selector: 'app-addvehicule',
  templateUrl: './addvehicule.component.html',
  styleUrls: ['./addvehicule.component.css']
})
export class AddvehiculeComponent {

  constructor(private vs:VehiculeService,private route:Router) { }

  ngOnInit(): void {
  }



  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }


  add(f:any){
    let data=f.value

    this.vs.addVehicule(data).subscribe(data=>console.log(data))

    Swal.fire({
      icon: 'success',
      title: 'Vous avez ajoutée Une Véhicule',
      showConfirmButton: false,
      timer: 1000
    })
      }
    }

