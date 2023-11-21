import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{
  messageErr=""
  constructor(private us:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value

     this.us.addUser(data).subscribe(data=>console.log(data))
     Swal.fire({
      icon: 'success',
      title: 'Vous avez ajoutée Un utilisateur',
      showConfirmButton: false,
      timer: 1000
    })


  }


  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }



}
